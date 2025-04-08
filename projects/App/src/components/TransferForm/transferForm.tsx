"use client";

import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TransferFormData } from '@/lib/types';

interface TransferFormProps {
  formData: TransferFormData;
  SetFormData: React.Dispatch<React.SetStateAction<TransferFormData>>;
}


const TransferForm: React.FC<TransferFormProps> = ({ formData, SetFormData }) => {

  return (
    <div className="space-y-8">
      <label className="block mb-2 text-lg">Amount</label>

      <div className="rounded-md flex items-center mb-4 p-0 input-box divide-x divide-gray-700 gap-x-2">
        <Select defaultValue={formData?.token} onValueChange={(value) => SetFormData({ ...formData, token: value })}>
          <SelectTrigger className="w-[100px] border-transparent">
            <SelectValue placeholder="Token" />
          </SelectTrigger>

          <SelectContent className="bg-white">
            <SelectItem value="edu">EDU</SelectItem>
            <SelectItem value="usdt">USDT</SelectItem>
            <SelectItem value="usdc">USDC</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex-1 ml-5">
          <input value={formData?.amount} onChange={(e) => SetFormData({ ...formData, amount: e.target.value })} className="w-full bg-transparent border-none outline-none pt-3" placeholder="Amount to Send" />
          <span className="text-gray-400 text-sm">$16.23</span>
        </div>
      </div>

      <div className="mt-10">
        <label className="block mb-2 text-lg">Wallet Address (optional)</label>
        <input value={formData?.address} className="input-box" onChange={(e) => SetFormData({ ...formData, address: e.target.value })} placeholder="Receiver's Wallet Address" />
      </div>

      <div className="flex items-center mb-8">
        <Switch
          checked={formData?.encryptTransaction}
          onCheckedChange={(checked) => SetFormData({ ...formData, encryptTransaction: checked })}
        />
        <span className="ml-2">Encrypt Transaction</span>
      </div>
    </div>
  )
}

export default TransferForm