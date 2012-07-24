function validateAccident()
{
    if (validateLocation("#inc_lat") && checkRadio("acc_info","severity") && checkRadio("acc_info","vehicle") && checkRadio("acc_info","cause") && validateDate("#date") && validateTime("#time"))
    {                
        var elapsed = new Date().getTime() - $("#counter").val();
        $("#counter").val(elapsed);
        
        $("#acc_lat").val($("#inc_lat").val());
        $("#acc_lng").val($("#inc_lng").val());        
        return true;
    }
    else
    {
        var resp = " ";
        
        if (!validateLocation("#inc_lat"))
            resp += "\n- Location";
        if (!checkRadio("acc_info","severity"))
            resp += "\n- Severity";
        if (!checkRadio("acc_info","vehicle"))
            resp += "\n- Vehicle";
        if (!checkRadio("acc_info","cause"))
            resp += "\n- Cause";
        if (!validateDate("#date"))
            resp += "\n- Date";
        if (!validateTime("#time"))
            resp += "\n- Time";        
        alert('Report is not complete. Please enter: '+resp);
        return false;
    }
}