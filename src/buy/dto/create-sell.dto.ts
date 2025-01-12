import { IsOptional } from "class-validator";

export class CreateSellDto {
    @IsOptional()
    date?: number;
    @IsOptional()
    dateend?: number;
    @IsOptional()
    staff_name?: string;
    @IsOptional()
    staff_id?: string;
    @IsOptional()
    costumer_id?: string;
    @IsOptional()
    costumer_name?: string;
    @IsOptional()
    costumer_email?: string;
    @IsOptional()
    costumer_phone?: string;
    @IsOptional()
    costumer_address?: string;
    @IsOptional()
    costumer_city?: string;
    @IsOptional()
    costumer_state?: string;
    @IsOptional()
    costumer_country?: string;
    @IsOptional()
    costumer_zip?: string;
    @IsOptional()
    costumer_geoLoc?: { lat: number, lng: number };
    @IsOptional()
    products?: object[];
    @IsOptional()
    state_of_transaction?: string; // PAID: pagado, PENDING: pendiente, CANCELLED: cancelado, REFUNDED: reembolsado, RETURNED: devuelto, REJECTED: rechazado
    @IsOptional()
    total?: number;
    @IsOptional()
    total_tax_p?: number;
    @IsOptional()
    total_discount?: number;
    @IsOptional()
    total_discount_tax_p?: number;
    @IsOptional()
    total_shipping?: number;
    @IsOptional()
    total_shipping_tax_p?: number;
    @IsOptional()
    total_shipping_discount_p?: number;
    @IsOptional()
    total_shipping_discount_tax_p?: number;
}
