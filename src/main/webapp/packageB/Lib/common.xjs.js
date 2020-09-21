//XJS=common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path, "Lib::commDate.xjs");
        this.addIncludeScript(path, "Lib::commFrame.xjs");
        this.addIncludeScript(path, "Lib::commScript.xjs");
        this.addIncludeScript(path, "Lib::commComp.xjs");
        this.registerScript(path, function() {

        //include "Lib::commDate.xjs";
        //include "Lib::commFrame.xjs";
        //include "Lib::commScript.xjs";
        //include "Lib::commComp.xjs";

        
        this.Comm_transactionCallback= function(oSvc,errorcode,errormsg)
        {
            new Iject.Controll.callback().transaction(oSvc,errorcode,errormsg);
        }
         
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
