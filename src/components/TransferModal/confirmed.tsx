import { Copy } from 'lucide-react'

const ConfirmedTransaction = () => {
  return (
    <div className="space-y-8">
      <div className="p-4 rounded-lg bg-[#1a1f2b]/30 border border-gray-800">
        <div className="text-lg py-4 space-y-4">
          <div className="grid grid-cols-1">
            <div className="col-span-1">Claiming Code</div>
            <div className="col-span-1 input-box">code3435erydjbn</div>
          </div>

          <div className="grid grid-cols-1">
            <div className="col-span-1">Claiming Password</div>
            <div className="col-span-1 input-box">3435ery42wr2</div>
            <div className="col-span-1 text-red-500 font-light text-sm">
              password will not be shown again after you close this pop up
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-2 cursor-pointer place-self-end px-3 py-1.5 rounded-md bg-[#1a1f2b] w-fit">
          <Copy /> Copy
        </div>
      </div>

      <h6 className="text-lg hs-text">Code and Password will be used for claiming</h6>
    </div>
  )
}

export default ConfirmedTransaction