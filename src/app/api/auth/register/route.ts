import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface User {
  username: string;
  password: string;
}

// Временное хранилище (потом заменим на БД)
const users: User[] = [];

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ username, password: hashedPassword });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}