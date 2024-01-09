import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsDateString, IsArray, ArrayNotEmpty, ArrayUnique, Matches, MinLength, MaxLength } from "class-validator";

export class CreateDuacoderDto {

    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{8}[a-zA-Z]$/, {
        message: 'El NIF no tiene el formato correcto'
    })
    nif: string;
    
    @IsNotEmpty()
    @IsBoolean()
    isTeamOnion?: boolean;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    name: string;
    
    @IsOptional()
    @IsString()
    @MaxLength(500)
    bio?: string;
    
    @IsNotEmpty()
    @IsString()
    department: string;
    
    @IsNotEmpty()
    @IsString()
    departmentPosition: string;
    
    @IsOptional()
    @IsString()
    photo?: string;
    
    @IsOptional()
    @IsDateString()
    birthdate?: Date;

    @IsArray()
    @IsString({ each: true })
    skills?: string[];

}
