export const formStepsNames = ['About', 'Information', 'Services'];

export const initialDataSchema = {
  name: '',
  firstName: '',
  secondName: '',
  email: '',
  password: '',
  zipCode: '',
  state: '',
  city: '',
  address: '',
  firstPhoneNumber: '',
  secondPhoneNumber: '',
  openningHours: [
    {
      day: 'Sunday',
      isOpen: false,
      openTimeHours: 0,
      closeTimeHours: 0,
      openTimeMinutes: 0,
      closeTimeMinutes: 0,
    },
    {
      day: 'Monday',
      isOpen: true,
      openTimeHours: 9,
      closeTimeHours: 6,
      openTimeMinutes: 0,
      closeTimeMinutes: 0,
    },
    {
      day: 'Tuesday',
      isOpen: true,
      openTimeHours: 9,
      closeTimeHours: 6,
      openTimeMinutes: 0,
      closeTimeMinutes: 0,
    },
    {
      day: 'Wednesday',
      isOpen: true,
      openTimeHours: 9,
      closeTimeHours: 6,
      openTimeMinutes: 0,
      closeTimeMinutes: 0,
    },
    {
      day: 'Thursday',
      isOpen: true,
      openTimeHours: 9,
      closeTimeHours: 6,
      openTimeMinutes: 0,
      closeTimeMinutes: 0,
    },
    {
      day: 'Friday',
      isOpen: true,
      openTimeHours: 9,
      closeTimeHours: 6,
      openTimeMinutes: 0,
      closeTimeMinutes: 0,
    },
    {
      day: 'Saturday',
      isOpen: false,
      openTimeHours: 9,
      closeTimeHours: 6,
      openTimeMinutes: 0,
      closeTimeMinutes: 0,
    },
  ],
  longitude: 0,
  services: [
    {
      name: 'Exterior Damage',
      value: true,
    },
    {
      name: 'Interior Damage',
      value: true,
    },
    {
      name: 'Tire Fix/Replacement',
      value: false,
    },
    {
      name: 'Mechanical Diagnosis/Fix',
      value: true,
    },
    {
      name: 'Engine Diagnosis/Fix',
      value: false,
    },
    {
      name: 'Alignment',
      value: true,
    },
    {
      name: 'Transmission Fix',
      value: true,
    },
    {
      name: 'Suspension Fix',
      value: true,
    },
    {
      name: 'Oil filter Change/Replacement',
      value: true,
    },
    {
      name: 'Air filter Change/Replacement',
      value: false,
    },
    {
      name: 'Inspection',
      value: true,
    },
    {
      name: 'Paint Work',
      value: false,
    },
    {
      name: 'Exterior Detailing/Cleaning',
      value: false,
    },
    {
      name: 'Interior Detailing/Cleaning',
      value: true,
    },
    {
      name: 'Vehicle Upholstery',
      value: false,
    },
    {
      name: 'Roadside Assistance',
      value: true,
    },
  ],
};
