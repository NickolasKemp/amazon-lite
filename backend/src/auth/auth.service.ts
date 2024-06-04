import { BadRequestException, Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma.service"
import { AuthDto } from "./auth.dto"
import { hash } from "argon2"

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	async register(dto: AuthDto) {
		const oldUser = this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		})

		// if (oldUser) throw new BadRequestException("User already exists.")

		const user = this.prisma.user.create({
			data: {
				email: dto.email,
				name: dto.name,
				password: await hash(dto.password) 
			}
		})

		return user
	}
}
