import { ExitStarted } from '../generated/Plasma Confirm Withdraw/WithdrawManager'
//import { toDecimal } from './numbers'
import { ConfirmEntity } from '../generated/schema'
 

// token, from, amount, to
export function handleConfirmWithdraw(event: ExitStarted): void {
   
  let confirmrEntity = new ConfirmEntity(event.transaction.hash.toHex());
  confirmrEntity.exitor = event.params.exitor
  confirmrEntity.exitId = event.params.exitId 
  confirmrEntity.rootToken = event.params.token
  confirmrEntity.exitAmountOrTokenId = event.params.amount
  confirmrEntity.isRegularExit = event.params.isRegularExit
  confirmrEntity.transaction = event.transaction.hash

  
  confirmrEntity.save()
}