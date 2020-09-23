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
                this.set_name("TEST");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_court", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefMainTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefPos\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegInst\" type=\"STRING\" size=\"256\"/><Column id=\"pladefEndInst\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefMainTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefPos\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegInst\" type=\"STRING\" size=\"256\"/><Column id=\"pladefEndInst\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer01", "absolute", "10", "68", "454", "52", null, null, this);
            obj.set_taborder("0");
            obj.set_text("ImageViewer01");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04", "absolute", "131", "75", "309", "37", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "16", "75", "139", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("법원 검색");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #969696ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("굴림,9, bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "6", "8", "984", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("       연결화면");
            obj.style.set_background("cornflowerblue");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "369", "83", "52", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.style.set_border("1 solid #999999ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "10", "153", "945", "72", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "15.82%", "82", null, "22", "64.65%", null, this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16.7%", "83", null, "22", "65.63%", null, this);
            obj.set_taborder("11");
            obj.set_wordwrap("char");
            obj.style.set_color("darkgray");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer06", "absolute", "129", "171", "309", "37", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer07", "absolute", "16", "171", "139", "37", null, null, this);
            obj.set_taborder("14");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #969696ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("굴림,9, bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_no01", "absolute", "16.02%", "177", "19.34%", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search00", "absolute", "36.43%", "179", "55", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("검색");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_plaintiff", "absolute", "13", "232", null, "194", "69", null, this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_pladef");
            obj.set_scrollbars("fixedvert");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"80\"/><Column size=\"116\"/><Column size=\"96\"/><Column size=\"99\"/><Column size=\"84\"/><Column size=\"180\"/><Column size=\"98\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"주민등록번호\"/><Cell col=\"3\" text=\"청구소가\"/><Cell col=\"4\" text=\"주요연락처\"/><Cell col=\"5\" text=\"추가연락처\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"readonly\" style=\"align:center;\" text=\"bind:pladefSeq\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"readonly\" editfilter=\"lower,char\" style=\"align:center;\" text=\"bind:pladefName\" editlimit=\"30\" editimemode=\"none\" editdisplay=\"edit\"/><Cell col=\"2\" edittype=\"readonly\" style=\"align:center;\" text=\"bind:pladefRegNo\" mask=\"######-#######\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"readonly\" style=\"align:right;\" text=\"bind:pladefClamVol\" mask=\"#,###\" editlimit=\"15\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"readonly\" editfilter=\"number\" style=\"align:center;\" text=\"bind:pladefMainTel\" mask=\"###-####-####\" editlimit=\"11\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"readonly\" editfilter=\"number\" style=\"align:center;\" text=\"bind:pladefAddTel\" mask=\"###-###-####\" editlimit=\"11\"/><Cell col=\"6\" edittype=\"readonly\" text=\"bind:pladefAddr1\"/><Cell col=\"7\" edittype=\"readonly\" style=\"align:center;\" text=\"bind:pladefPos\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_mod", "absolute", "84.08%", "197", null, "22", "9.67%", null, this);
            obj.set_taborder("19");
            obj.set_text("수정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TEST");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","edt_no01","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("TEST.xfdl", "Lib::common.xjs");
        this.registerScript("TEST.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        var	lawsrcrlt = "";		//소송관리번호
        var instcdrlt = "";		//심급코드

        this.btn_search_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);

        	var newChild = new ChildFrame;
        	newChild.init("PopCourt"
        		, "absolute", nLeft, nTop, 300, 100, null, null
        		, "lawsuit::POP_COURT_SEARCH.xfdl");

        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");

        	newChild.showModal(this.getOwnerFrame()
        		, ""
        		, this
        		, "modal_callback");
        }

        this.btn_lawsuit_search_onclick = function(obj,e)
        {
        	var lawSearchNo = "";	//소송관리번호 검색값
        	 
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	 
        	var newChild = new ChildFrame;
        	newChild.init("SearchNo"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LAWSUIT_ADM_NO.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");

        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }

        this.Btn_mod_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);

        	var newChild = new ChildFrame;
        	newChild.init("PopMod"
        		, "absolute", nLeft, nTop, 550, 250, null, null
        		, "lawsuit::LITIGANT_REGISTER.xfdl");

        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	this.ds_pladef1.clearData();
        	var nTrow = this.ds_pladef1.addRow();
        	var bSucc= this.ds_pladef1.copyRow(nTrow,this.ds_pladef,this.grd_plaintiff.currentrow);
        	newChild.showModal(this.getOwnerFrame()
        		, {ds:this.ds_pladef1}
        		, this
        		, "modal_callback");
        }

        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "PopCourt")	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        		this.ds_court.clearData();
        		this.gf_classCodeListLoad("searchCourt",  "ds_court",  "Y", "fnCallback", "A01"); //코드조회
        		this.Static00.set_text(variant);
        	}else if(strID == "SearchNo"){
        		if(this.gfn_IsNull(variant)==false){
        			lawsrcrlt = variant.substr(0,10);	// 소송관리번호
        			if(variant.length == "13"){
        				instcdrlt = variant.substr(10,3);	//심급코드
        			}
        			this.edt_no01.set_value(lawsrcrlt);
        			this.getPladefSearch(lawsrcrlt,instcdrlt);	//원피고 조회
        			this.Btn_mod.set_enable(true);
        		}else{
        			return false;
        		}
        	}else if(strID == "PopMod")	{
        		this.getPladefSearch(lawsrcrlt,instcdrlt);
        //		if(this.gfn_IsNull(variant))
        //		{
        //			this.edt_no01.set_value(lawsrcrlt);
        //			this.getPladefSearch(lawsrcrlt,instcdrlt);
        //			this.Btn_mod.set_enable(true);
        			return;
        //		}
        	}
        }

        /********************************************************************************
         * Desc		: 원피고 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.getPladefSearch=function(sColumn1,sColumn2)
        {
        	
        	//원피고조회
        	var strSvcid="PladefSearch";
        	var strController="lawsuit/getPlaDefList.do";
        	var strParam="lawsuitAdmNo="+"\""+sColumn1+"\"";//소송관리번호
        		strParam+=" instAdmCode="+"\""+sColumn2+"\"";	//심급코드
        	trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_pladef=ds_output",strParam,"fnCallback");
        }

        this.fnCallback=function(svcid,errcd,errmsg)
        {	
        	switch(svcid)
        	{
        		case "PladefSearch":
        		//데이터 조회 에러 발생시
        			if(errcd != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        					+ "원피고목록 에러내용: "+ errmsg);
        				return false;
        			}
        			else{ //여기
        				break;
        			}
        		default:
        			break;
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ImageViewer01.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer02.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.img_titlebg.addEventHandler("onclick", this.img_titlebg_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer07.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.btn_lawsuit_search00.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.grd_plaintiff.addEventHandler("onkeydown", this.grd_plaintiff_onkeydown, this);
            this.grd_plaintiff.addEventHandler("oncelldblclick", this.grd_plaintiff_oncelldblclick, this);
            this.Btn_mod.addEventHandler("onclick", this.Btn_mod_onclick, this);

        };

        this.loadIncludeScript("TEST.xfdl");

       
    };
}
)();
