import { IsEmail, IsString, MaxLength, MinLength } from "class-validator"

export class AuthDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(6, {
		message: "Password must be at least 6 characters long"
	})
	password: string

	@IsString()
	@MaxLength(20, { message: "Name must be at most 20 characters long" })
	name: string
}
