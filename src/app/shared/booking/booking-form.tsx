"use client";

import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { th } from "date-fns/locale";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDay, getDate, isEqual } from "date-fns";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { generateIntervalHours } from "@/utils/date-format";
import { useCreateAppointment } from "@/app/hooks/useCreateAppointment";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

// can be set to disable specific days
const weekend: number[] = [];

type DayOff = {
  date: string;
  reason: string;
};
// can be used to disable specific dates
const dayOffs: DayOff[] = [
  // {
  //   date: "2024-05-26",
  //   reason: "Public holiday",
  // },
  // {
  //   date: "2024-05-28",
  //   reason: "Public holiday",
  // },
];

const BookingFormSchema = z.object({
  providerId: z.string(),
  date: z.date(),
  slot: z.array(z.date()),
});

type BookingForm = z.infer<typeof BookingFormSchema>;
type WorkingHour = {
  dayOfWeek: number;
  workingHours: { start: number; end: number }[];
};
type Slot = {
  datetime: Date;
  disabled: boolean;
};

type BookingFormProps = {
  disabledSlots?: Date[];
  workingHours?: WorkingHour[];
  defaultValues?: BookingForm;
};

const BookingForm = ({
  disabledSlots = [],
  workingHours = [],
  defaultValues,
}: BookingFormProps) => {
  const { toast } = useToast();
  const { mutate: createAppointment, isPending } = useCreateAppointment();
  const form = useForm<BookingForm>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: {
      date: new Date(),
      slot: [],
      ...defaultValues,
    },
  });

  const date = form.watch("date");
  const slot = form.watch("slot");
  const dayOfWeek = getDay(date);

  const generateAvailableTimeSlots = () => {
    const slots: Slot[] = [];

    workingHours
      .filter((wh) => wh.dayOfWeek === dayOfWeek)
      .forEach((wh) => {
        wh.workingHours.forEach((hour) => {
          generateIntervalHours(date, hour.start, hour.end).forEach((date) => {
            slots.push({
              datetime: date,
              disabled:
                disabledSlots?.some((disabled) =>
                  isEqual(new Date(disabled), date)
                ) ||
                weekend.includes(getDay(date)) ||
                dayOffs.some((dayOff) =>
                  isEqual(
                    getDate(new Date(date)),
                    getDate(new Date(dayOff.date))
                  )
                ),
            });
          });
        });
      });

    return slots;
  };

  const handleAddBookingTime = (bookingTime: Date) => {
    if (findslotelected(bookingTime)) {
      form.setValue(
        "slot",
        form
          .getValues("slot")
          .filter((time) => !isEqual(new Date(time), new Date(bookingTime)))
      );
      return;
    }

    form.setValue("slot", [...form.getValues("slot"), bookingTime]);
  };

  const findslotelected = (bookingTime: Date) => {
    return slot.find((time) => isEqual(new Date(time), new Date(bookingTime)));
  };

  const onSubmit = (data: BookingForm) => {
    createAppointment(
      {
        providerId: data.providerId,
        slot: data.slot,
      },
      {
        onSuccess: () => {
          toast({
            title: "Appointment booked",
            description:
              "You can view your appointment in the menu My Appointments",
          });
        },
        onError: (error) => {
          toast({
            title: error.message,
            description: "Please try again",
          });
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Schedule</FormLabel>
              <Calendar
                mode="single"
                locale={th}
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => {
                  return (
                    date < new Date() ||
                    weekend.includes(getDay(date)) ||
                    dayOffs.some((dayOff) =>
                      isEqual(
                        getDate(new Date(date)),
                        getDate(new Date(dayOff.date))
                      )
                    )
                  );
                }}
              />
            </FormItem>
          )}
        />
        <Separator className="my-4" />
        {workingHours
          .filter((wh) => wh.dayOfWeek === dayOfWeek)
          .map((wh) => (
            <div key={wh.dayOfWeek}>
              <h3 className="text-lg font-semibold">Working Hours</h3>
              <div className="grid grid-cols-2 md:grid-cols-3">
                {generateAvailableTimeSlots().map((slot) => (
                  <Button
                    type="button"
                    key={slot.datetime.toISOString()}
                    className={cn("m-2", {
                      "bg-primary": findslotelected(slot.datetime),
                      "text-white": findslotelected(slot.datetime),
                      "bg-gray-200": slot.disabled,
                    })}
                    variant={
                      findslotelected(slot.datetime) ? "default" : "outline"
                    }
                    onClick={() => handleAddBookingTime(slot.datetime)}
                    disabled={slot.disabled}
                  >
                    {slot.datetime.toLocaleTimeString()}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="text-white font-semibold py-2 px-4 rounded-md w-full"
            disabled={isPending}
          >
            Book now
          </Button>
        </div>
      </form>
    </Form>
  );
};

BookingForm.propTypes = {
  workingHours: PropTypes.arrayOf(
    PropTypes.shape({
      dayOfWeek: PropTypes.number.isRequired,
      workingHours: PropTypes.arrayOf(
        PropTypes.shape({
          start: PropTypes.number.isRequired,
          end: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ),
  defaultValues: PropTypes.shape({
    department: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    slot: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  }),
};

export default BookingForm;
