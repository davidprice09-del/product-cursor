import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  type: string;
  imageUrl?: string;
  status?: string;
}

export function ProductCard({ name, type, imageUrl, status }: ProductCardProps) {
  return (
    <Card className="h-[128px] w-[364px] border border-grey-200 rounded-lg overflow-hidden">
      <div className="flex h-full gap-6 p-6">
        {/* Product Image */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded border border-grey-200 bg-[#fafbfc]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={80}
              height={80}
              className="object-contain"
            />
          ) : (
            <div className="h-12 w-12 rounded bg-gray-200" />
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col gap-2">
          <div>
            <h3 className="text-base font-medium leading-[1.4] text-black-500">
              {name}
            </h3>
            <p className="text-sm leading-[1.4] text-grey-500">{type}</p>
          </div>

          {/* Status Badge */}
          {status && (
            <Badge variant="success" className="w-fit px-1 py-0.5 text-sm">
              {status}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}

