// app/api/customers/register/route.ts

import { NextResponse } from 'next/server';
import { saveCustomer } from '@/app/lib/data';

export async function POST(request: Request) {
  try {
    const { name, email, imageUrl } = await request.json();
    await saveCustomer({ name, email, imageUrl });
    return NextResponse.json({ message: 'Customer registered successfully' });
  } catch (error) {
    console.error('Error registering customer:', error);
    return NextResponse.error();
  }
}
