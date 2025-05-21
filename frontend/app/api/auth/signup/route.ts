import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }
    const user = await prisma.user.create({
      data: { email, name, password },
    });
    return NextResponse.json({ message: 'User created', user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}