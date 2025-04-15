function calc(){
    let euro = euroField.value;
    result = euro * 161.65;
    yen.value = result.toFixed(2).replace('.', ',');
}