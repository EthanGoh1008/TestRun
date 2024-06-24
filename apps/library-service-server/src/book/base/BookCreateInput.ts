/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsOptional, IsEnum } from "class-validator";
import { EnumBookAvailability } from "./EnumBookAvailability";
import { EnumBookStatus } from "./EnumBookStatus";

@InputType()
class BookCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumBookAvailability,
  })
  @IsEnum(EnumBookAvailability)
  @IsOptional()
  @Field(() => EnumBookAvailability, {
    nullable: true,
  })
  availability?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumBookStatus,
  })
  @IsEnum(EnumBookStatus)
  @IsOptional()
  @Field(() => EnumBookStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { BookCreateInput as BookCreateInput };