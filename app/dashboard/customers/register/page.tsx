// app/dashboard/customers/register/page.tsx

import CustomerRegistrationForm from '@/app/ui/customers/registration-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register Customer',
};

export default function RegisterCustomerPage() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Register New Customer</h1>
      <CustomerRegistrationForm />
    </main>
  );
}
