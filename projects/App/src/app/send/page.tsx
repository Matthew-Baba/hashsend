import TransferModal from '@/components/TransferForm'
import React from 'react'

const SendToken = () => {
  return (
    <main className="min-h-screen py-14">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg p-14 overflow-hidden">
        <TransferModal />
      </div>
    </main>
  )
}

export default SendToken