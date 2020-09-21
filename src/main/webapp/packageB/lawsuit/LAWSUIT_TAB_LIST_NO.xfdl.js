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
                this.set_name("LAWSUIT_TAB_LIST_NO");
                this.set_classname("LAWSUIT_TAB_LIST_NO");
                this.set_titletext("소송담당자 등록");
                this._setFormPosition(0,0,385,185);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mgr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrId\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrAsigDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mgr2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrId\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitMgrAsigDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_06", "absolute", "14", "65", "361", "85", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", null, "50", "8", null, this);
            obj.set_taborder("0");
            obj.set_text("   소송담당자 등록");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "155", "55", "23", "9", null, this);
            obj.set_taborder("6");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "155", "55", "23", "71", null, this);
            obj.set_taborder("5");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "20", "71", null, "25", "16", null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "20", "95", null, "25", "16", null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "20", "119", null, "25", "16", null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "20", "71", "106", "25", null, null, this);
            obj.set_text("소송담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "20", "95", "27.79%", "25", null, null, this);
            obj.set_text("담당자부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "20", "119", "106", "25", null, null, this);
            obj.set_text("배정일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mgrName", "absolute", "132", "74", "140", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mgr", "absolute", "293", "72", "55", "23", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept", "absolute", "132", "98", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_index("-1");

            obj = new Calendar("cal_mgrdate", "absolute", "132", "122", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");

            obj = new Edit("edt_mgrId", "absolute", "399", "69", "137", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 385, 185, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_TAB_LIST_NO");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송담당자 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_mgrName","value","ds_mgr","lawsuitMgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_mgrdate","value","ds_mgr","lawsuitMgrAsigDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_mgrId","value","ds_mgr","lawsuitMgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmb_dept","value","ds_mgr","lawsuitMgrDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_TAB_LIST_NO.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_TAB_LIST_NO.xfdl", function() {
        //include "Lib::common.xjs";

        
        var lawsuitAdmNo = this.getOwnerFrame().lawsuitAdmNo;

        this.LAWSUIT_TAB_LIST_NO_onload=function(obj,e)
        {
        	//trace("lawsuitAdmNo : "+lawsuitAdmNo);
        	this.ds_dept.clearData();
        	this.gf_codeComListLoad("ds_dept",  "ds_dept",  "Y", "000", "선택", "fnCallback", "B01"); //담당자부서공통코드
        }

        this.btn_mgr_onclick=function(obj,e)
        {
        	//var rtn = dialog("LAWSUIT_CHAR","lawsuit::LAWSUIT_CHAR.xfdl","LAWSUIT_LIST",{id:""},"showtitlebar=true",0,0);
        	 
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("LAWSUIT_CHAR"
        					, "absolute", nLeft, nTop, null, null, null, null
        					, "lawsuit::LAWSUIT_CHAR.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	var variant = system.showModalWindow(newChild, "LAWSUIT_CHAR", this);
        	//trace(variant);
        	var idx = variant.indexOf("&"); 
            var a = variant.substring(0, idx);
            var b = variant.substring(idx+1);
        	this.ds_mgr.setColumn(0,"lawsuitMgrId",a);
        	this.ds_mgr.setColumn(0,"lawsuitMgrName",b);
        }

        this.btn_insert_onclick=function(obj,e)
        {
        	if(this.edt_mgrName.text==""){
        		alert("소송담당자를 입력해주세요.");
        		return;
        	}
        	if(this.cmb_dept.value=="000"){
        		alert("담당자부서를 선택해주세요.");
        		this.cmb_dept.dropdown();
        		this.cmb_dept.setFocus();
        		return;
        	}
        	if(this.gfn_IsNull(this.cal_mgrdate.value)==true){
        		alert("배정일자를 선택해주세요.");
        		this.cal_mgrdate.dropdown();
        		this.cal_mgrdate.setFocus();
        		return;
        	}
        	//trace(ds_mgr.saveXML());
        	var strSvcid="lawsuitMgrManage";
        	var strController="/lawsuit/lawsuitMgrManage.do";
        	var strParam="";
        	//trace(strParam);
        	trace(this.ds_mgr);
        	this.gfn_transaction(this,strSvcid,strController,"ds_input=ds_mgr:a","",strParam,"fnCallback");
        }

        this.btn_close_onclick=function(obj,e)
        {
        	this.close();
        }

        this.fn_MgrSelect=function()
        {
        	var strSvcid="MgrSelect";
        	var strController="lawsuit/getMgrSelect.do";
        	var strParam="lawsuitAdmNo="+"\""+lawsuitAdmNo+"\"";//소송관리번호
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_mgr=ds_output",strParam,"fnCallback");
        }

        this.fnCallback=function(svcid,errcd,errmsg)
        {
        	switch(svcid)
        	{
        		case "lawsuitMgrManage" :
        			if(errcd==0){
        				alert("소송담당자가 등록되었습니다.");
        				
        			}else{
        				alert(errmsg);
        			}
        			this.close();
        		break;
        		case "MgrSelect" :
        			var mgrNo = this.ds_mgr.rowcount;
        			if(mgrNo == 0){//소송담당자 없을시
        				this.ds_mgr.copyData(this.ds_mgr2);
        				this.ds_mgr.addRow();
        				this.ds_mgr.setColumn(this.ds_mgr.rowposition,"lawsuitAdmNo", lawsuitAdmNo);
        				this.cmb_dept.index=0;
        			}
        		break;
        		case "ds_dept" :
        			//trace(ds_dept.saveXML());
        			//ds_dept.deleteRow(0);
        			this.cmb_dept.index=0;
        			//trace(ds_dept.saveXML());
        			if(lawsuitAdmNo==null)
        			{
        				alert("소송관리번호를 선택해세요.");
        				this.close();
        			}
        			else
        			{
        				this.fn_MgrSelect();
        			}
        		break;
        	}
        }
        this.cmb_dept_onitemchanged=function(obj,e)
        {
        	this.ds_mgr.setColumn(0,"lawsuitMgrDeptCode",e.postvalue);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_TAB_LIST_NO_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_mgr.addEventHandler("onclick", this.btn_mgr_onclick, this);
            this.cmb_dept.addEventHandler("onitemchanged", this.cmb_dept_onitemchanged, this);

        };

        this.loadIncludeScript("LAWSUIT_TAB_LIST_NO.xfdl");

       
    };
}
)();
