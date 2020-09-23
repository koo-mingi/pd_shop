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
                this.set_name("legalAdv");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_border("1 none #808080ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_legal", this);
            obj._setContents("<ColumnInfo><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtrY\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtrN\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtrA\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode1\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode2\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode3\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode4\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqMgrCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

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

            obj = new Dataset("ds_open", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">Y</Col><Col id=\"codenm\">공개</Col></Row><Row><Col id=\"codeno\">N</Col><Col id=\"codenm\">비공개</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept_t", this);
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


            
            // UI Components Initialize
            obj = new Static("Static09", "absolute", "14", "161", "996", "419", null, null, this);
            obj.set_taborder("84");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "23", "14", "168", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("소송접수관리");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "23", "14", "168", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("법률 자문건 현황");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("62");
            obj.set_text("  법률 자문건 현황");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "65", "996", "59", null, null, this);
            obj.set_taborder("63");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("64");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("65");
            obj.set_text("의뢰부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reqmgr", "absolute", "471", "73", "140", "19", null, null, this);
            obj.set_taborder("66");
            obj.set_enable("true");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "351", "70", "115", "25", null, null, this);
            obj.set_taborder("68");
            obj.set_text("의뢰자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "94", "984", "25", null, null, this);
            obj.set_taborder("69");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "94", "115", "25", null, null, this);
            obj.set_taborder("70");
            obj.set_text("공개여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "351", "94", "115", "25", null, null, this);
            obj.set_taborder("72");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_reqdate1", "absolute", "471", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.style.set_background("#f7f7f7ff");

            obj = new Static("Static07", "absolute", "624", "98", "16", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_reqdate2", "absolute", "642", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.style.set_background("#f7f7f7ff");

            obj = new Button("btn_list_search00", "absolute", "880", "95", "55", "23", null, null, this);
            obj.set_taborder("76");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clean", "absolute", "941", "95", "55", "23", null, null, this);
            obj.set_taborder("77");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept", "absolute", "140", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("79");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_index("-1");

            obj = new Combo("cmb_open", "absolute", "140", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_innerdataset("@ds_open");
            obj.set_datacolumn("codenm");
            obj.set_codecolumn("codeno");
            obj.set_value("Y");
            obj.set_text("공개");
            obj.set_index("0");

            obj = new Static("Static08", "absolute", "14", "134", "996", "19", null, null, this);
            obj.set_taborder("82");
            obj.set_text("법률 자문건 현황");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0", "absolute", "20", "167", "984", "407", null, null, this);
            obj.set_taborder("58");
            obj.set_binddataset("ds_legal");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회가 되지 않았습니다");
            obj.set_enableevent("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"114\"/><Column size=\"114\"/><Column size=\"104\"/><Column size=\"105\"/><Column size=\"103\"/><Column size=\"104\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" colspan=\"3\" displaytype=\"text\" edittype=\"none\" text=\"상태\"/><Cell col=\"4\" colspan=\"4\"><Cell colspan=\"2\" displaytype=\"text\" edittype=\"none\" text=\"법률자문유형\"/><Cell col=\"2\"/><Cell col=\"3\"/></Cell><Cell row=\"1\" text=\"의뢰자\"/><Cell row=\"1\" col=\"1\" text=\"미회신\"/><Cell row=\"1\" col=\"2\" text=\"회신\"/><Cell row=\"1\" col=\"3\" text=\"계\"/><Cell row=\"1\" col=\"4\" text=\"보상손사자문\"/><Cell row=\"1\" col=\"5\" text=\"계약관련자\"/><Cell row=\"1\" col=\"6\" text=\"일반자문\"/><Cell row=\"1\" col=\"7\" text=\"계\"/></Band><Band id=\"body\"><Cell edittype=\"text\" expr=\"insaName +&quot; (&quot;+legaladvReqMgrCode+&quot;)&quot;\"/><Cell col=\"1\" edittype=\"text\" style=\"align:right;\" expr=\"expr:legaladvRepWtrY+&quot; &quot;\" suppress=\"0\"/><Cell col=\"2\" edittype=\"text\" style=\"align:right;\" expr=\"expr:legaladvRepWtrN+&quot; &quot;\"/><Cell col=\"3\" edittype=\"text\" style=\"align:right;\" expr=\"expr:legaladvRepWtrY+legaladvRepWtrN\"/><Cell col=\"4\" edittype=\"text\" style=\"align:right;\" expr=\"expr:legaladvLawAdvCode1+&quot; &quot;\"/><Cell col=\"5\" edittype=\"text\" style=\"align:right;\" expr=\"expr:legaladvLawAdvCode2+&quot; &quot;\"/><Cell col=\"6\" edittype=\"text\" style=\"align:right;\" expr=\"expr:legaladvLawAdvCode3+&quot; &quot;\"/><Cell col=\"7\" edittype=\"text\" style=\"align:right;\" expr=\"expr:legaladvLawAdvCode1+legaladvLawAdvCode2+legaladvLawAdvCode3\"/></Band><Band id=\"summary\"><Cell text=\"통계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvRepWtrY)&quot;)+&quot; 건 &quot;\"/><Cell col=\"2\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvRepWtrN)&quot;)+&quot; 건 &quot;\"/><Cell col=\"3\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvRepWtrY)+parseInt(legaladvRepWtrN)&quot; )+&quot; 건 &quot;\"/><Cell col=\"4\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvLawAdvCode1)&quot;)+&quot; 건 &quot;\"/><Cell col=\"5\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvLawAdvCode2)&quot;)+&quot; 건 &quot;\"/><Cell col=\"6\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvLawAdvCode3)&quot;)+&quot; 건 &quot;\"/><Cell col=\"7\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvLawAdvCode1)+parseInt(legaladvLawAdvCode2)+parseInt(legaladvLawAdvCode3)&quot; )+&quot; 건 &quot;  \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "585", "55", "25", null, null, this);
            obj.set_taborder("83");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("legal_ad_list");
            		p.set_titletext("New Form");
            		p.style.set_border("1 none #808080ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Grid0","","ds_legal","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Static00","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_reqmgr","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_reqdate1","value","ds_lawsuitNoti","lawsuitNotiDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_reqdate2","value","ds_lawsuitNoti","lawsuitNotiDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Static09","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("legal_ad_list.xfdl", "Lib::common.xjs");
        this.registerScript("legal_ad_list.xfdl", function() {
        //include "Lib::common.xjs"; 

        
        var check=-1;
        this.clearSearchData = function()
        {
        	this.edt_reqmgr.set_value("");
        	this.cmb_dept.set_value("");
        	this.cal_reqdate1.set_value("");
        	this.cal_reqdate2.set_value("");
        	this.cmb_open.set_value("Y");
        	this.ds_legal.clearData();

        }

        this.legalAdv_onload = function(obj,e)
        {
        // 	var strController = "svcurl::code/selectCodeList.do";
        // 	var strParam = "AllYn=Y, AllCode='', AllName='', ";
        // 	
        // 	this.clearSearchData();	
        // 	this.transaction("trDept", strController, "", "ds_dept_t=ds_output", strParam+"CLASS_CODE=B01", "fnCallback");
        this.cmb_dept.index="0";
        //this.cmb_open.set_value("");
        this.gf_codeComListLoad("ds_dept",  "ds_dept",   "Y", "", "", "fnCallback", "S01");
        check=0;
        this.btn_search_onclick();
        }

        
        this.fnCallback=function(strSvcId,nErrCode,strErrMessage)
        {
        	
        	switch(strSvcId)
        	{	
        		case "legal_advSelect":
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			}
        			//trace(this.ds_legal.saveXML());
        			break;
        									
        		case "ds_dept": 
        			this.ds_dept.setColumn(0, "codeno", "");
         			this.ds_dept.setColumn(0, "codenm", "전체");
        			trace("tran val : "+this.cmb_dept.value+" 2"+this.edt_reqmgr.value+" 3" +this.cmb_open.value+" 4"+this.cal_reqdate1.value);
        			var nRowCnt = this.ds_dept_t.getRowCount();
        			
        			for (var i=0; i < nRowCnt; i++) {
        				nCurRow = this.ds_dept.addRow(); 
        				this.ds_dept.copyRow(nCurRow, this.ds_dept_t, i);
        			}
        			break;	
        	}
        }

        this.btn_reset_onclick = function(obj,e)
        {
        	this.clearSearchData();
        	this.legalAdv_onload();
        	
        }
        this.btn_search_onclick = function(obj,e)
        {
        	   
        	if(this.cal_reqdate1.value > this.cal_reqdate2.value)
        	{
        		alert("뒤의 일자가 더 작습니다..");
        		this.cal_reqdate1.value="";
        		this.cal_reqdate2.value="";
        		this.cal_reqdate2.setFocus();
        		return;	
        	}
        	else
        	{
        		var strController= "";
        		var strOutputDs = "ds_legal=ds_output";
        		var strParam = "";
        		trace("tran");
        		//expr:legaladvRepWtrN> '0' ? '###건': '0건'
        		//expr:legaladvRepWtrA > '0' ? '###건': '0건'
        		(typeof this.cmb_dept.value== 'undefined') ? strParam += "" : strParam += "deptcode=" +"\"" +this.cmb_dept.value +"\""; 	
        		(typeof this.edt_reqmgr.value== 'undefined') ? strParam += "": (strParam += "reqmgr=" +"\""+this.edt_reqmgr.value+"\""); 
        		strParam += " openyn=" +"\""+this.cmb_open.value+"\"";
        		
        		this.gfn_IsNull(this.cal_reqdate1.value) ? "" : strParam += "date1=" +"\""+this.cal_reqdate1.value+"\"";
        		this.gfn_IsNull(this.cal_reqdate2.value) ? "" : strParam += "date2=" +"\""+this.cal_reqdate2.value+"\"";
        		if(check ==0 ){
        			check=1;
        			strParam="";
        		}
        		trace("인자 : "+strParam);
        		this.gfn_transaction(this,"legal_advSelect","/legal_ad/legal_advSelect.do", "", strOutputDs, strParam, "fnCallback");
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        		var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        this.edt_ID_OnKeyDown = function(obj,e)
        {
            if( e.keycode == 13 ){
               this.btn_search_onclick();
            }
        }
        this.btn_zip_onclick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.legalAdv_onload, this);
            this.sta_title00.addEventHandler("onclick", this.sta_title00_onclick, this);
            this.edt_reqmgr.addEventHandler("onkeydown", this.edt_ID_OnKeyDown, this);
            this.btn_list_search00.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clean.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.cmb_dept.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.cmb_open.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.btn_close.addEventHandler("onclick", this.btn_zip_onclick, this);

        };

        this.loadIncludeScript("legal_ad_list.xfdl");

       
    };
}
)();
