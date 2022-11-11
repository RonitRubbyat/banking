document.getElementById('diposit-btn').addEventListener('click',function(){
    const dipositInput = document.getElementById('diposit-input');
    const dipositAmountText = dipositInput.value;
    const dipositAmount = parseFloat(dipositAmountText);

    const dipositTotalText = document.getElementById('diposit-total');
    const dipositTotal = dipositTotalText.innerText;
    const currentDipossitTotal = parseFloat(dipositTotal);
    
    const newDipositToltal = dipositAmount + currentDipossitTotal;

    dipositTotalText.innerText  = newDipositToltal;

    // add balance total
    const balanceTotlaText = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotlaText.innerText);
    
    const newBalanceTotal = dipositAmount + balanceTotal;

    balanceTotlaText.innerText = newBalanceTotal;

    // clear diposit input value
    dipositInput.value ='';
})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    let withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotalText = document.getElementById('withdraw-total');
    const withdrawTotal = withdrawTotalText.innerText;
    const currentDipossitTotal = parseFloat(withdrawTotal);
    
    const newWithdrawToltal = withdrawAmount + currentDipossitTotal;

    withdrawTotalText.innerText  = newWithdrawToltal;

    // add balance total
    const balanceTotlaText = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotlaText.innerText);
    
    const newBalanceTotal = balanceTotal - withdrawAmount;

    balanceTotlaText.innerText = newBalanceTotal;

    // clear Withdraw input value
    withdrawInput.value ='';
})