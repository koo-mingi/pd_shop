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
                this.set_name("LAWSUIT_NOTI_NO");
                this.set_titletext("소송고지번호조회");
                this._setFormPosition(0,0,600,400);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lawsuitNoti", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitNotiAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiInstSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDfsDeg\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDfsDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiPlaName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiPlaEtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDefEtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">전체</Col><Col id=\"value\"/></Row><Row><Col id=\"id\">소송고지번호</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"id\">사건번호</Col><Col id=\"value\">2</Col></Row><Row><Col id=\"id\">원고명</Col><Col id=\"value\">3</Col></Row><Row><Col id=\"id\">피고명</Col><Col id=\"value\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instanceType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_01", "absolute", "14", "65", "572", "35", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Search", "absolute", "14", "104", "572", null, null, "12", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_lawsuitNoti");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 자료가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"소송고지번호\"/><Cell col=\"2\" text=\"고지일자\"/><Cell col=\"3\" text=\"사건번호\"/><Cell col=\"4\" text=\"원고명\"/><Cell col=\"5\" text=\"피고명\"/><Cell col=\"6\" text=\"심급\"/><Cell col=\"7\" text=\"법원명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:lawsuitNotiAdmNo\"/><Cell col=\"2\" text=\"bind:lawsuitNotiDate\" mask=\"@@@@-@@-@@\"/><Cell col=\"3\" text=\"bind:lawsuitNotiCaseNo\"/><Cell col=\"4\" text=\"bind:lawsuitNotiPlaName\"/><Cell col=\"5\" text=\"bind:lawsuitNotiDefName\"/><Cell col=\"6\" celltype=\"none\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:lawsuitNotiInstSepcode\" displayexpdec=\"-1\" combodataset=\"ds_instanceType\" combocodecol=\"codeno\" combodatacol=\"codenm\" combodisplay=\"edit\" combotype=\"dropdown\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:lawsuitNotiCortCode\" combodataset=\"ds_court\" combocodecol=\"codeno\" combodatacol=\"codenm\" combodisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "572", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("  소송고지번호조회");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "21", "70", "558", "25", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search", "absolute", "73", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("id");
            obj.style.set_color("#46463dff");
            obj.set_text("전체");
            obj.set_displaynulltext("전체");
            obj.set_index("0");

            obj = new Edit("edt_legal_input", "absolute", "204", "73", "230", "19", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "440", "71", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_NOTI_NO");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송고지번호조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item13","cmb_search","value","ds_lawsuitNoti","lawsuitNotiInstSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_legal_input","value","ds_phyAprs","phyAprsName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_NOTI_NO.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_NOTI_NO.xfdl", function() {
        //include "Lib::common.xjs";

        this.LAWSUIT_NOTI_NO_onload=function(obj,e)
        {
        trace("mo start");
        	
        	//전체조회시 검색어 입력 할 필요 없음
        	this.edt_legal_input.set_enable(false);
        	this.edt_legal_input.value="";
        	//공통코드(법원,심급) 세팅
        	this.gf_codeComListLoad("ds_court",  "ds_court",  "Y", "", "", "fnCallback", "A01"); //법원공통코드
        	this.gf_codeComListLoad("ds_instanceType",  "ds_instanceType",  "Y", "", "", "fnCallback", "G01"); //심급차수코드

        	this.btn_search_onclick();
        }

        this.cmb_search_onitemchanged=function(obj,e)
        {
        trace("2");
        	if(this.cmb_search.text == "전체"){ 
        		this.edt_legal_input.set_enable(false);
        		this.edt_legal_input.value = "";
        	}else{
        		this.edt_legal_input.set_enable(true);
        	}
        }

        this.edt_legal_input_onkeydown=function(obj,e)
        {

        	if(e.keycode==13){ 
        		this.btn_search_onclick();
        	}
        }

        this.btn_search_onclick=function(obj,e)
        {
        trace("3");
        	//var strURL="svc::lawsuit_noti/LawNotiNoSearch.do";
        	var strSvcid="getLawNotiNoSearch";
        	var strController="/lawsuit/getLawNotiNoSearch.do";
        	var strParam="selectedId="+"\""+this.cmb_search.value+"\"";//소송관리번호
        		strParam+="selectedId1="+"\""+this.edt_legal_input.value+"\"";
        	trace("setParam = " + strParam);
        	this.gfn_transaction(this,strSvcid,strController,"","ds_lawsuitNoti=ds_output",strParam,"fnCallback");
        }

        this.grd_Search_oncelldblclick=function(obj,e)
        {

        	//trace(ds_lawsuitNoti.getColumn(ds_lawsuitNoti.rowposition,"lawsuitNotiAdmNo"));
        	this.close(this.ds_lawsuitNoti.getColumn(e.row,"lawsuitNotiAdmNo"));
        	//this.ds_lawsuitNoti.deleteAll();
        }

        this.fnCallback=function(svcid,errcd,errmsg)
        {

        
        	switch(svcid)
        	{
        		case "getLawNotiNoSearch" :
        			//trace(ds_lawsuitNoti.saveXML());
        			break;
        		case "ds_court" :
        			//trace(ds_court.saveXML());
        		break;
        		case "ds_instanceType" :
        			//trace(ds_instanceType.saveXML());
        		break;
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_NOTI_NO_onload, this);
            this.grd_Search.addEventHandler("onheadclick", this.grd_Search_onheadclick, this);
            this.grd_Search.addEventHandler("oncelldblclick", this.grd_Search_oncelldblclick, this);
            this.cmb_search.addEventHandler("onitemchanged", this.cmb_search_onitemchanged, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("LAWSUIT_NOTI_NO.xfdl");

       
    };
}
)();
