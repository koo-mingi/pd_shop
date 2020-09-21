(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("LAWSUIT_ADD");
                this.set_classname("LAWSUIT_ADD");
                this.set_titletext("반소사항");
                this._setFormPosition(0,0,532,156);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_counter", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">예</Col><Col id=\"codeNo\">Y</Col></Row><Row><Col id=\"codeName\">아니요</Col><Col id=\"codeNo\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCtaWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCtaNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCtaCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCtaChg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_06", "absolute", "15", "64", "507", "60", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", null, "50", "9", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 dotum");
            obj.set_text("   반소사항");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "21", "69", null, "25", "16", null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "21", "69", "105", "25", null, null, this);
            obj.set_text("반소여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "21", "93", null, "25", "16", null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "21", "93", "105", "25", null, null, this);
            obj.set_text("반소사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "267", "69", "105", "25", null, null, this);
            obj.set_text("반소송번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "267", "93", "105", "25", null, null, this);
            obj.set_text("반소금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_countNo", "absolute", "128", "96", "130", "19", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addLawsuit", "absolute", null, "128", "55", "23", "72", null, this);
            obj.set_taborder("5");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "128", "55", "23", "9", null, this);
            obj.set_taborder("6");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_re", "absolute", "128", "72", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_innerdataset("@ds_counter");
            obj.set_datacolumn("codeName");
            obj.set_codecolumn("codeNo");
            obj.set_columncount("2");

            obj = new Edit("edt_countEventNo", "absolute", null, "72", "130", "19", "28", null, this);
            obj.set_taborder("2");
            obj.set_maxlength("10");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_countSum", "absolute", null, "96", "130", "19", "28", null, this);
            obj.set_taborder("8");
            obj.set_mask("+###,###");
            obj.getSetter("maxlength").set("15");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 532, 156, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_ADD");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("반소사항");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","rdo_re","value","ds_lawsuit2","lawsuitCtaWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_countEventNo","value","ds_lawsuit2","lawsuitCtaNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_countNo","value","ds_lawsuit2","lawsuitCtaCaseNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_ADD.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_ADD.xfdl", function() {
        //include "Lib::common.xjs";

        var no = this.getOwnerFrame().no;
        var str_CtaWtr = this.getOwnerFrame().str_CtaWtr;
        var str_CtaNo = this.getOwnerFrame().str_CtaNo;
        var str_CtaCaseNo = this.getOwnerFrame().str_CtaCaseNo;
        var str_CtaChg = this.getOwnerFrame().str_CtaChg;

        this.rdo_re_onitemchanged=function(obj,e)
        {
        	if(this.rdo_re.index=="1"){
        		this.edt_countEventNo.set_enable(false);
        		this.edt_countNo.set_enable(false);
        		this.edt_countSum.set_enable(false);
        	}else{
        		this.edt_countEventNo.set_enable(true);
        		this.edt_countNo.set_enable(true);
        		this.edt_countSum.set_enable(true);
        	}
        }

        this.LAWSUIT_ADD_onload=function(obj,e)
        {
        	//trace("no ="+no+"str_CtaWtr="+str_CtaWtr+" str_CtaNo="+str_CtaNo+" str_CtaCaseNo="+str_CtaCaseNo+" str_CtaChg="+str_CtaChg);
        	this.ds_lawsuit2.addRow();
        	this.ds_lawsuit2.setColumn(0,"lawsuitAdmNo",no);
        	if(this.gfn_IsNull(str_CtaWtr)==true){
        		this.ds_lawsuit2.setColumn(0,"lawsuitCtaWtr","Y");
        		this.ds_lawsuit2.setColumn(0,"lawsuitCtaNo","");
        		this.ds_lawsuit2.setColumn(0,"lawsuitCtaCaseNo","");
        		this.ds_lawsuit2.setColumn(0,"lawsuitCtaChg","");
        	}else{
        		this.ds_lawsuit2.setColumn(0,"lawsuitCtaWtr",str_CtaWtr);
        		this.ds_lawsuit2.setColumn(0,"lawsuitCtaNo",str_CtaNo);
        		this.ds_lawsuit2.setColumn(0,"lawsuitCtaCaseNo",str_CtaCaseNo);
        		this.ds_lawsuit2.setColumn(0,"lawsuitCtaChg",str_CtaChg);
        	}
        	
        	
        	if(this.ds_lawsuit2.getColumn(0,"lawsuitCtaWtr")=="N"){
        		this.edt_countEventNo.set_enable(false);
        		this.edt_countNo.set_enable(false);
        		this.edt_countSum.set_enable(false);
        	}
        	//trace(ds_lawsuit2.saveXML());
        }

        this.btn_addLawsuit_onclick=function(obj,e)
        {	
        	if(this.rdo_re.index=="0"){
        		if(this.gfn_IsNull(this.edt_countEventNo.value)==true){
        			alert("반소송번호를 입력해주세요.");
        			this.edt_countEventNo.setFocus();
        			return;
        		}
        		if(this.gfn_IsNull(this.edt_countNo.value)==true){
        			alert("반소사건번호를 입력해주세요.");
        			this.edt_countNo.setFocus();
        			return;
        		}
        		if(this.gfn_IsNull(this.edt_countSum.value)==true){
        			alert("반소금액을 입력해주세요.");
        			this.edt_countSum.setFocus();
        			return;
        		}
        	}
        	//trace(ds_lawsuit2.saveXML());
        	var strSvcid="saveAddLawsuit";
        	var strController="lawsuit/saveAddLawsuit.do";
        	var strParam="";
        	//trace(strParam);
        	//trace(this.ds_lawsuit2.saveXML());
        	this.gfn_transaction(this,strSvcid,strController,"ds_input=ds_lawsuit2:u","",strParam,"fnCallback");
        }

        this.btn_close_onclick=function(obj,e)
        {
        	this.close();
        }

        this.fnCallback=function(svcid,errcd,errmsg)
        {
        	switch(svcid)
        	{
        		case "saveAddLawsuit" :
        			if(errcd==0){
        				alert("등록되었습니다.");
        			}else{
        				alert(errmsg);
        			}
        			this.close(this.rdo_re.value+"&"+this.edt_countEventNo.value+"&"+this.edt_countNo.value+"&"+this.edt_countSum.value);
        		break;
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_ADD_onload, this);
            this.btn_addLawsuit.addEventHandler("onclick", this.btn_addLawsuit_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.rdo_re.addEventHandler("onitemchanged", this.rdo_re_onitemchanged, this);

        };

        this.loadIncludeScript("LAWSUIT_ADD.xfdl");

       
    };
}
)();
