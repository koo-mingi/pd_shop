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
                this.set_name("LITIGANT_REGISTER");
                this.set_classname("LITIGANT_REGISTER");
                this.set_titletext("원피고");
                this._setFormPosition(0,0,549,249);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_def", this);
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


            
            // UI Components Initialize
            obj = new ImageViewer("img_titlebg", "absolute", "8", "8", "536", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("   원피고 수정");
            obj.style.set_background("cornflowerblue");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "65", "525", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "14", "89", "525", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "14", "113", "525", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "14", "137", "525", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "14", "161", "525", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "14", "185", "525", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "14", "65", "102", "25", null, null, this);
            obj.set_text("원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "14", "89", "102", "25", null, null, this);
            obj.set_text("등록번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "14", "113", "102", "25", null, null, this);
            obj.set_text("주요연락처");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "14", "137", "102", "25", null, null, this);
            obj.set_text("우편번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_10", "absolute", "14", "161", "102", "25", null, null, this);
            obj.set_text("주      소");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11", "absolute", "14", "185", "102", "25", null, null, this);
            obj.set_text("상세 주소");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_pladef_type", "absolute", "119", "68", "154", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_def");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_enable("false");

            obj = new MaskEdit("msk_regNo", "absolute", "119", "92", "154", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_mask("######-#######");
            obj.set_type("string");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_main_tel", "absolute", "119", "116", "154", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_mask("###-###-####");
            obj.set_type("string");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "276", "65", "102", "25", null, null, this);
            obj.set_text("성명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13", "absolute", "276", "89", "102", "25", null, null, this);
            obj.set_text("청구소가");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_14", "absolute", "276", "113", "102", "25", null, null, this);
            obj.set_text("추가연락처");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name", "absolute", "381", "68", "154", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit0", "absolute", "381", "92", "132", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_type("number");
            obj.set_mask("#,###");
            obj.set_limitbymask("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "514", "92", "20", "19", null, null, this);
            obj.set_text("원");
            obj.style.set_border("1 none #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_sub_tel", "absolute", "381", "116", "154", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_mask("###-###-####");
            obj.set_type("string");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_zip", "absolute", "119", "140", "154", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr1", "absolute", "119", "164", "416", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr2", "absolute", "119", "188", "416", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", "437", "222", "52", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "492", "222", "52", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16", "absolute", "18", "95", "16", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17", "absolute", "13", "119", "16", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "16", "143", "16", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "16", "168", "16", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_20", "absolute", "288", "72", "16", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_21", "absolute", "279", "95", "16", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_22", "absolute", "272", "120", "16", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_charge", "absolute", "478", "317", "154", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute", "absolute", "276", "139", "52", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00", "absolute", "0.18%", "261", null, "35", "83.97%", null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{8856F961-340A-11D0-A96B-00C04FD705A2}");
            obj.setProperty("popupstyle", "true");
            obj.setProperty("windowed", "true");
            obj.setProperty("taborder", "3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 549, 249, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LITIGANT_REGISTER");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("원피고");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","cmb_pladef_type","value","ds_pladef","pladefSepCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_zip","value","ds_pladef","pladefPos");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_addr1","value","ds_pladef","pladefAddr1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_addr2","value","ds_pladef","pladefAddr2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_charge","value","ds_pladef","pladefClamVol");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","msk_main_tel","visible","ds_pladef","pladefMainTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","msk_sub_tel","visible","ds_pladef","pladefAddTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","MaskEdit0","visible","ds_pladef","pladefClamVol");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","msk_regNo","visible","ds_pladef","pladefRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_name","value","ds_pladef","pladefName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","msk_regNo","value","ds_pladef","pladefRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","MaskEdit0","value","ds_pladef","pladefClamVol");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","msk_main_tel","value","ds_pladef","pladefMainTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","msk_sub_tel","value","ds_pladef","pladefAddTel");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LITIGANT_REGISTER.xfdl", "Lib::common.xjs");
        this.registerScript("LITIGANT_REGISTER.xfdl", function() {
        //include "Lib::common.xjs";
        var temp = null;
        this.LITIGANT_REGISTER_onload = function(obj,e)
        {
        	this.ds_pladef.clearData();
        	var bSucc= this.ds_pladef.copyData(this.parent.ds);
        	this.ds_def.clearData();
        	this.gf_classCodeListLoad("getcodeAtReg",  "ds_def",  "Y", "fnCallback", "H02"); //코드조회
        	temp = this.ds_pladef.getColumn(0,"pladefSepCode");
        //	alert(this.ds_pladef.getColumn(0,"pladefAddTel")+" "+temp);
        //	this.fn_getPladef();	//원피고 조회 및 생성
        }

        
        /********************************************************************************
         * Desc		: 원피고 조회 및 생성
         * Param	: 없음
         * Return	: 없음
         this.fn_getPladef = function()
        {
        	var S_defregvalue = 1; 
        	//Parent.ds_ComInfo.getColumn(0,"defregvalue");	//원피고 신규입력 화면 구분값[신규:1, 수정:2]
        	
        	if(S_defregvalue==1){
        		this.ds_pladef.addRow(); //원피고 생성
        		
        		var strCheck="";
        		
        		if(sendPladefSepCode == "001"){	//당사가 피고라면
        			this.cmb_pladef_type.value = "002";
        			this.cmb_pladef_type.enable = false;
        			strCheck="001";
        		}else if(sendPladefSepCode== "002"){	//당사가 원고라면
        			this.cmb_pladef_type.value="001";
        			this.cmb_pladef_type.enable = false;
        			strCheck="002";
        		}
        		else{
        			this.cmb_pladef_type.enable = true;
        		}
        		this.ds_pladef.setColumn(this.ds_pladef.row,"lawsuitAdmNo", sendLawsuitAdmNo);//소송관리번호
        		this.ds_pladef.SetColumn(this.ds_pladef.row,"pladefSepCode",sendPladefSepCode);//원피고 구분
        		this.ds_pladef.SetColumn(this.ds_pladef.row,"pladefSeq",sendCountNo);	//ds 로우값
        	}
        	else if(S_defregvalue ==2){
        	
        		var V_lawsuitNo = Parent.ds_ComInfo.getColumn(0,"lawsuitAdmNo");
        		var V_pladefcode = Parent.ds_ComInfo.getColumn(0,"pladefSepCode");
        		var V_pladefseq =Parent.ds_ComInfo.getColumn(0,"pladefSeq");
        	
        		var pladefchk="";	//당사원피고에 따른 원피고 구분
        	
        		if(V_pladefcode == "001"){
        			this.cmb_pladef_type.Index = 2;
        			pladefchk = "002";
        		}
        		else if(V_pladefcode =="002"){
        			this.cmb_pladef_type.Index = 1;
        			pladefchk = "001";
        		}
        		fn_getPladefdetail(V_lawsuitNo,pladefchk,V_pladefseq);	//원피고 조회
        	}		
        }
        *******************************************************************************/

        this.btn_zip_onclick = function(obj,e)
        {
        	divCommonData="2";
        	var rtn = Dialog("main::zipcode","");
        	
        	if (isCmmNull(rtn) == 0) {
        		var obj = split2(rtn, "&", "=");
        		for (var i=0; i<obj.length; i++)
        		{
        			AddVariable(obj[i][0], obj[i][1]);
        		}
        		this.ds_pladef.setColumn(this.ds_pladef.row,"pladefPos",replace(obj[0][1],"-"));
        		this.ds_pladef.SetColumn(this.ds_pladef.row,"pladefAddr1",obj[1][1]);	
        		this.ds_pladef.SetColumn(this.ds_pladef.row,"pladefAddr2",obj[2][1]);
        	} else {
        		
        	}
        }

        /********************************************************************************
         * Desc		: 원피고 초기화
         * Param	: 없음
         * Return	: 없음

        this.btn_reset_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	this.ds_pladef.ClearData();
        	this.ds_pladef.AddRow();
        }
         *******************************************************************************/
        this.btn_insert_onclick = function(obj,e)
        {
        	if (!this.fn_validation()){	//유효성검사
        	return;
        	}
        //	this.insertPladef();			//원피고 저장

        	this.updatePladef();			//원피고 수정
        }

        /********************************************************************************
         * Desc		: 원피고
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.updatePladef = function()
        {
        	this.ds_pladef.setColumn(0,"pladefSepCode",temp);
        	var strSvcID="update";
        	var strURL="lawsuit/updatePlaDefAll.do";
        	var strInputDs="ds_input=ds_pladef";
        	var strOutputDs="";
        	var strArgument="";
        	var strFnCallback="fnCallback";
        	
        	this.gfn_transaction(this,
        				strSvcID,
        				strURL,
        				strInputDs,
        				strOutputDs,
        				strArgument,
        				strFnCallback);
        }
        /********************************************************************************
         * Desc		: 심급관리 필수 값 체크
         * Param	: 없음
         * Return	: true - 필수 값이 다 입력되었음
                      false - 입력안된 필수 값이 있음
         *******************************************************************************/
        this.fn_validation = function()
        {
        	if(this.cmb_pladef_type.value=''){
        		alert("소제기의뢰번호를 입력하세요");
        		return false;
        	}else if(this.edt_name.value=''){
        		alert("이름을 입력하세요");
        		return false;
        	}else if(this.msk_regNo.value=''){
        		alert("등록번호를 입력하세요");
        		return false;
        	}else if(this.edt_charge.value=''){
        		alert("청구소가를 입력하세요");
        		return false;
        	}else if(this.msk_main_tel.value=''){
        		alert("주요연락처를 입력하세요");
        		return false;
        	}else if(this.msk_sub_tel.value=''){
        		alert("추가연락처를 입력하세요");
        		return false;
        	}else if(this.edt_zip.value=''){
        		alert("우편번호를 입력하세요");
        		return false;
        	}else if(this.edt_addr2.value=''){
        		alert("상세주소를 입력하세요");
        		return false;
        	}
        	else{
        		return true;
        	}
        }

        /********************************************************************************
         * Desc		: 원피고 생성
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
         this.insertPladef = function()
         {
         
        	var strSvcID="insert";
        	var strURL="svc::pladef/plaDefMgr.do";
        	var strInputDs="ds_input=ds_pladef:u";
        	var strOutputDs="";
        	var strArgument="voClass='pdsystem.pladef.model.PlaDefVO'";
        	var strFnCallback="fnCallback";
        	
        	Transaction(strSvcID,
        				strURL,
        				strInputDs,
        				strOutputDs,
        				strArgument,
        				strFnCallback);
         }
         
         /********************************************************************************
         * Event	: btn_close onclick
         * Desc		:닫기 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/

        this.msk_regNo_oneditclick = function(obj,e)
        {
        	var text=msk_regNo.Value;
        	if(text.length<13){
        		alert("등록번호를 정확히 입력해주세요");
        		this.msk_regNo.setFocus();
        		return false;
        	}
        }
         /********************************************************************************
         * Event	: btn_execute_onclick
         * Desc		: 우편번호 검색 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/

        this.btn_execute_onclick = function(obj,e)
        {
        	this.Plugin00.callMethod("Navigate2", "http://localhost:8080/pd_law_nexa/jsp/zipcodeSearch.jsp"); // JKIM_2020.02.17 : jsp 디렉토리로 변경
        }

        // 우편 번호 검색 후 값 받기
        this.Plugin00_TitleChange = function()
        {
        	if(arguments[0] != "TITLE"){
        		var postArr = arguments[0].split("_");
        		this.edt_zip.set_value(postArr[0]);
        		this.edt_addr1.set_value(postArr[1]);
        		this.edt_addr2.set_enable(true);
        	}
        	
        }

        

        this.msk_regNo_ontextchanged = function(obj,e)
        {
        	this.mask_sort("registerNo");
        }

        this.mask_sort = function(section){
        	if(section == "phone1"){              
        		var in_phone1=this.msk_main_tel.value;
        		if(SubStr(in_phone1,0,2) == '02') {
        			if(in_phone1.length <= 9) {
        				this.msk_main_tel.mask = '##-###-#####';
        			} else {
        				this.msk_main_tel.mask = '##-####-####';
        			}
        		} else {
        			if(in_phone1.length <= 10) {
        				this.msk_main_tel.mask = '###-###-#####';
        			} else {
        				this.msk_main_tel.mask = '###-####-####';
        			}
        		}
        	}else if(section == "phone2"){
        		var in_phone2=msk_sub_tel.Value;
        		if(SubStr(in_phone2,0,2) == '02') {
        			if(in_phone2.length <= 9) {
        				this.msk_sub_tel.mask = '##-###-#####';
        			} else {
        				this.msk_sub_tel.mask = '##-####-####';
        			}
        		} else {
        			if(in_phone2.length <= 10) {
        				this.msk_sub_tel.mask = '###-###-#####';
        			} else {
        				this.msk_sub_tel.mask = '###-####-####';
        			}
        		}
            }
        }

        this.msk_main_tel_canchange = function(obj,e)
        {
        	var text=msk_main_tel.Value;
        	if(text.length<9){
        		alert("연락처를 정확히 입력해주세요");
        		this.msk_main_tel.setFocus();
        		return false;
        	}
        }

        this.msk_main_tel_ontextchanged = function(obj,e)
        {
        	this.mask_sort("phone1");
        }

        this.msk_sub_tel_canchange = function(obj,e)
        {
        	var text=msk_sub_tel.Value;
        	if(text.length<9){
        		alert("추가연락처를 정확히 입력해주세요");
        		this.msk_sub_tel.setFocus();
        		return false;
        	}
        }

        this.msk_sub_tel_ontextchanged = function(obj,e)
        {
        	this.mask_sort("phone2");
        }

        /*===============================================================================
         * 5. User Function 관련 Script
         *=============================================================================*
        /********************************************************************************
         * Desc		: transaction 후 호출되는 콜백함수
                      소송관리 조회,신규,수정,삭제,결재
         * Param	: 1.errcd  - Error Code
        			  2.errmsg - Error Msg
        			  3.svcid  - transaction id
         * Return	: 없음
         *******************************************************************************/ 
        this.fnCallback = function(svcid,errcd,errmsg)
        {
        	switch(svcid)
        	{
        		case "getcodeAtReg":
        			if(errcd < "0"){
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        					+ "코드조회 에러내용: "+ errmsg);
        				return false;
        			}else{
        //				this.cmb_pladef_type.set_enable(true);
        //				alert("002"+this.ds_pladef.getColumn(0,"pladefSepCode"));
        				if(this.ds_pladef.getColumn(0,"pladefSepCode") == "002"){
        					this.cmb_pladef_type.set_index(2);
        				}else if(this.ds_pladef.getColumn(0,"pladefSepCode") == "001"){
        					this.cmb_pladef_type.set_index(1);
        				}else{
        					this.cmb_pladef_type.set_index(3);
        				}
        			}
        			break;
        		case "getPlaDefDetail":

        			//데이터 조회 에러 발생시
        			if(errcd != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        					+ "원피고조회 에러내용: "+ errmsg);
        				return false;
        			}
        			else{
        				this.cmb_pladef_type.enable = false;
        			}
        			break;
        		case "update":

        			//데이터 조회 에러 발생시
        			if(errcd != "0"){	
        			alert("데이터가 정상적으로 생성되지 않았습니다.\n"
        				+ "원피고생성 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				getLawsuitNo=this.ds_pladef.getColumn(this.ds_pladef.row,"lawsuitAdmNo");
        				this.close(getLawsuitNo);
        			}
        			break;
        	}
        }

        /********************************************************************************
         * Desc		: 원피고 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.fn_getPladefdetail = function(scolumn1,scolumn2,scolumn3)
         {
        	var strParam="";
        	strParam="lawsuit_adm_no="+wrapQuote(scolumn1);
        	strParam+=" pladefSepCode="+wrapQuote(scolumn2);
        	strParam+=" pladef_seq="+wrapQuote(scolumn3);
        	
        	var strSvcID3="getPlaDefDetail";
        	var strURL3="svc::pladef/getPlaDefDetail.do";
        	var strInputDs3="";
        	var strOutputDs3="ds_pladef=ds_output3";
        	var strFnCallback="fnCallback";
        				
        	Transaction(strSvcID3
        				,strURL3
        				,strInputDs3
        				,strOutputDs3
        				,strParam
        				,strFnCallback);
        }

         /********************************************************************************
         * Desc		: 화면닫기시 처리
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.LITIGANT_REGISTER_onclose = function(obj,e)
        {
        	var getLawsuitNo=this.ds_pladef.getColumn(this.ds_pladef.row,"lawsuitAdmNo");
        	this.close(getLawsuitNo);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	var getLawsuitNo = this.ds_pladef.getColumn(this.ds_pladef.row,"lawsuitAdmNo");
        	
        	if(getLawsuitNo != ""){
        		this.close(getLawsuitNo);
        	}else{
        		this.close();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose", this.LITIGANT_REGISTER_onclose, this);
            this.addEventHandler("onload", this.LITIGANT_REGISTER_onload, this);
            this.img_titlebg.addEventHandler("onclick", this.img_titlebg_onclick, this);
            this.cmb_pladef_type.addEventHandler("onitemchanged", this.cmb_pladef_type_onitemchanged, this);
            this.msk_regNo.addEventHandler("canchange", this.msk_regNo_canchange, this);
            this.msk_regNo.addEventHandler("ontextchanged", this.msk_regNo_ontextchanged, this);
            this.msk_regNo.addEventHandler("oneditclick", this.msk_regNo_oneditclick, this);
            this.msk_main_tel.addEventHandler("canchange", this.msk_main_tel_canchange, this);
            this.msk_main_tel.addEventHandler("ontextchanged", this.msk_main_tel_ontextchanged, this);
            this.msk_main_tel.addEventHandler("oneditclick", this.msk_main_tel_oneditclick, this);
            this.MaskEdit0.addEventHandler("oneditclick", this.MaskEdit0_oneditclick, this);
            this.msk_sub_tel.addEventHandler("canchange", this.msk_sub_tel_canchange, this);
            this.msk_sub_tel.addEventHandler("ontextchanged", this.msk_sub_tel_ontextchanged, this);
            this.edt_addr1.addEventHandler("onkeydown", this.edt_app_case_no_onkeydown, this);
            this.edt_addr2.addEventHandler("onkeydown", this.edt_app_case_no_onkeydown, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_execute.addEventHandler("onclick", this.btn_execute_onclick, this);
            this.Plugin00.addEventHandler("TitleChange", this.Plugin00_TitleChange, this);

        };

        this.loadIncludeScript("LITIGANT_REGISTER.xfdl");

       
    };
}
)();
