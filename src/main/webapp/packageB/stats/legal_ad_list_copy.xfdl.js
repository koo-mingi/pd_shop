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
                this.set_classname("legal_ad_list");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_border("1 none #808080ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_legal", this);
            obj._setContents("<ColumnInfo><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtrY\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtrN\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtrA\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode1\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode2\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode3\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div00", "absolute", "13", "69", null, "66", "1.31%", null, this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_shadow("outer 0,0 0 gray");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "19", "73", null, "29", "19", null, this);
            obj.set_taborder("40");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "19", "101", null, "29", "19", null, this);
            obj.set_taborder("41");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "19", "73", "10.44%", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_text("의뢰부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "19", "101", "10.44%", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("공개여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "34.94%", "73", "10.44%", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_text("의뢰자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "34.94%", "101", "10.44%", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reqmgr", "absolute", "45.78%", "77", null, "21", "21.59%", null, this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", "91.67%", "104", "55", "23", null, null, this);
            obj.set_taborder("52");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "85.94%", "104", null, "23", "8.53%", null, this);
            obj.set_taborder("53");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "61.65%", "106", null, "19", "37.15%", null, this);
            obj.set_taborder("54");
            obj.set_text("~");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_reqdate1", "absolute", "45.78%", "105", null, "21", "39.16%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Calendar("cal_reqdate2", "absolute", "63.65%", "105", null, "21", "21.29%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static01", "absolute", "1.1%", "136", null, "34", "86.65%", null, this);
            obj.set_taborder("57");
            obj.style.set_font("bold 10 굴림");
            obj.set_text("법률 자문건 현황");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0", "absolute", "1.31%", "168", null, "332", "13", null, this);
            obj.set_taborder("58");
            obj.set_binddataset("ds_legal");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회가 되지 않았습니다");
            obj.set_enableevent("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"114\"/><Column size=\"114\"/><Column size=\"104\"/><Column size=\"105\"/><Column size=\"103\"/><Column size=\"104\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" colspan=\"3\" displaytype=\"text\" edittype=\"none\" text=\"상태\"/><Cell col=\"4\" colspan=\"4\"><Cell colspan=\"2\" displaytype=\"text\" edittype=\"none\" text=\"법률자문유형\"/><Cell col=\"2\"/><Cell col=\"3\"/></Cell><Cell row=\"1\" text=\"의뢰자\"/><Cell row=\"1\" col=\"1\" text=\"미회신\"/><Cell row=\"1\" col=\"2\" text=\"회신\"/><Cell row=\"1\" col=\"3\" text=\"계\"/><Cell row=\"1\" col=\"4\" text=\"내부\"/><Cell row=\"1\" col=\"5\" text=\"외부\"/><Cell row=\"1\" col=\"6\" text=\"기타\"/><Cell row=\"1\" col=\"7\" text=\"계\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:insaName\"/><Cell col=\"1\" edittype=\"mask\" text=\"bind:legaladvRepWtrN\" mask=\"expr:legaladvRepWtrN&gt; '0' ? '###건': '0건'\" suppress=\"0\"/><Cell col=\"2\" edittype=\"mask\" text=\"bind:legaladvRepWtrY\" mask=\"expr:legaladvRepWtrY &gt; '0' ? '###건': '0건'\"/><Cell col=\"3\" edittype=\"mask\" text=\"bind:legaladvRepWtrA\" mask=\"expr:legaladvRepWtrA &gt; '0' ? '###건': '0건'\"/><Cell col=\"4\" edittype=\"mask\" text=\"bind:legaladvLawAdvCode1\" mask=\"expr:legaladvLawAdvCode1 &gt; '0' ? '###건': '0건'\"/><Cell col=\"5\" edittype=\"mask\" text=\"bind:legaladvLawAdvCode2\" mask=\"expr:legaladvLawAdvCode2 &gt; '0' ? '###건': '0건'\"/><Cell col=\"6\" edittype=\"mask\" text=\"bind:legaladvLawAdvCode3\" mask=\"expr:legaladvLawAdvCode3 &gt; '0' ? '###건': '0건'\"/><Cell col=\"7\" edittype=\"mask\" text=\"bind:legaladvLawAdvCode4\" mask=\"expr:legaladvLawAdvCode4 &gt; '0' ? '###건': '0건'\"/></Band><Band id=\"summary\"><Cell text=\"통계\"/><Cell col=\"1\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvRepWtrN)&quot;)+&quot; 건&quot;\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvRepWtrY)&quot;)+&quot; 건&quot;\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvRepWtrY)+parseInt(legaladvRepWtrN)&quot; )+&quot; 건&quot;\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvLawAdvCode1)&quot;)+&quot; 건&quot;\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvLawAdvCode2)&quot;)+&quot; 건&quot;\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvLawAdvCode2)&quot;)+&quot; 건&quot;\"/><Cell col=\"7\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvLawAdvCode1)+parseInt(legaladvLawAdvCode2)+parseInt(legaladvLawAdvCode3)&quot; )+&quot; 건&quot; \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "92.77%", "513", null, "23", "1.71%", null, this);
            obj.set_taborder("59");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept", "absolute", "12.85%", "77", "21.29%", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_innerdataset("@ds_dept");
            obj.set_displaynulltext("전체");
            obj.set_index("-1");

            obj = new Combo("cmb_open", "absolute", "12.85%", "105", "21.29%", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_text("전체");
            obj.set_innerdataset("@ds_open");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_index("0");

            obj = new Div("Div02", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("62");
            obj.set_text("  법률 자문건 현황");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 굴림체");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 66, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.set_visible("false");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_shadow("outer 0,0 0 gray");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("legal_ad_list_copy.xfdl", "Lib::common.xjs");
        this.registerScript("legal_ad_list_copy.xfdl", function() {
        //include "Lib::common.xjs"; 

        

        this.clearSearchData = function()
        {
        	this.edt_reqmgr.value = "";
        	this.cal_reqdate1.value = "";
        	this.cal_reqdate2.value = "";
        	this.cmb_dept.value = "";
        	
        	this.ds_legal.clearData();

        }

        this.legalAdv_onload = function(obj,e)
        {
        	var strController = "svcurl::code/selectCodeList.do";
        	var strParam = "AllYn=Y, AllCode='', AllName='', ";
        	
        	this.clearSearchData();	
        	this.transaction("trDept", strController, "", "ds_dept_t=ds_output", strParam+"CLASS_CODE=B01", "fnCallback");

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
        			break;
        									
        		case "trDept": 
        			var nCurRow = this.ds_dept.addRow();
        			this.ds_dept.setColumn(nCurRow, "codeno", "");
        			this.ds_dept.setColumn(nCurRow, "codenm", "전체");
        			
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
        		var strController= "svcurl::legal_ad/legal_advSelect.do";
        		var strOutputDs = "ds_legal=ds_output";
        		var strParam = "";
        		
        		strParam += "deptcode=" + this.cmb_dept.value; 	
        		strParam += " reqmgr=" + this.edt_reqmgr.value;
        		strParam += " openyn=" + this.cmb_open.value;
        		strParam += " date1=" + this.cal_reqdate1.value;
        		strParam += " date2=" + this.cal_reqdate2.value;

        		this.transaction("legal_advSelect",	strController, "", strOutputDs, strParam, "fnCallback");
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.legalAdv_onload, this);
            this.sta_title00.addEventHandler("onclick", this.sta_title00_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.cmb_dept.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.cmb_open.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);

        };

        this.loadIncludeScript("legal_ad_list_copy.xfdl");

       
    };
}
)();
