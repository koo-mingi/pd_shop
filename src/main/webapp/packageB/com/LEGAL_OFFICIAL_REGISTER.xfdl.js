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
                this.set_name("LEGAL_OFFICIAL_REGISTER");
                this._setFormPosition(0,0,590,248);
            }
            this.style.set_font("bold 9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_officialType", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeNo\">000</Col><Col id=\"codeName\">전체</Col></Row><Row><Col id=\"codeNo\">001</Col><Col id=\"codeName\">판사</Col></Row><Row><Col id=\"codeNo\">002</Col><Col id=\"codeName\">검사</Col></Row><Row><Col id=\"codeNo\">003</Col><Col id=\"codeName\">변호사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_official", this);
            obj._setContents("<ColumnInfo><Column id=\"legalOfficialinfoRelaNo\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrPsw\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoRelaSep\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoTeamname\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoMail\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoPhone\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoHdpn\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoCityCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_addr", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeNo\">002</Col><Col id=\"codeName\">부산광역시</Col></Row><Row><Col id=\"codeNo\">003</Col><Col id=\"codeName\">대구광역시</Col></Row><Row><Col id=\"codeNo\">004</Col><Col id=\"codeName\">인천광역시</Col></Row><Row><Col id=\"codeNo\">005</Col><Col id=\"codeName\">광주광역시</Col></Row><Row><Col id=\"codeNo\">006</Col><Col id=\"codeName\">대전광역시</Col></Row><Row><Col id=\"codeNo\">007</Col><Col id=\"codeName\">울산광역시</Col></Row><Row><Col id=\"codeNo\">008</Col><Col id=\"codeName\">세종특별자치시</Col></Row><Row><Col id=\"codeNo\">009</Col><Col id=\"codeName\">경기도</Col></Row><Row><Col id=\"codeNo\">010</Col><Col id=\"codeName\">강원도</Col></Row><Row><Col id=\"codeNo\">011</Col><Col id=\"codeName\">충청북도</Col></Row><Row><Col id=\"codeNo\">012</Col><Col id=\"codeName\">충청남도</Col></Row><Row><Col id=\"codeNo\">013</Col><Col id=\"codeName\">전라북도</Col></Row><Row><Col id=\"codeNo\">014</Col><Col id=\"codeName\">전라남도</Col></Row><Row><Col id=\"codeNo\">015</Col><Col id=\"codeName\">경상북도</Col></Row><Row><Col id=\"codeNo\">016</Col><Col id=\"codeName\">경상남도</Col></Row><Row><Col id=\"codeNo\">017</Col><Col id=\"codeName\">제주특별자치도</Col></Row><Row><Col id=\"codeNo\">018</Col><Col id=\"codeName\">기타</Col></Row><Row><Col id=\"codeNo\">019</Col><Col id=\"codeName\">기타테스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "1.36%", "7", null, "50", "1.36%", null, this);
            obj.set_taborder("0");
            obj.set_text("  법률관계자 등록");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "8", "63", "574", "35", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "13", "68", "563", "25", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "13", "68", "105", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("법률관계자번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_officialNo", "absolute", "120", "71", "89", "19", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_officialSearch", "absolute", "212", "69", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "269", "68", "105", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_sep", "absolute", "380", "71", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            var combo_sep_innerdataset = new Dataset("combo_sep_innerdataset", this.combo_sep);
            combo_sep_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">000</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">판사</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">검사</Col></Row><Row><Col id=\"codecolumn\">003</Col><Col id=\"datacolumn\">변호사</Col></Row></Rows>");
            obj.set_innerdataset(combo_sep_innerdataset);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Button("btn_clean", "absolute", "517", "69", "55", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "8", "103", "574", "109", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "13", "109", "563", "97", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "13", "109", "105", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("비밀번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "13", "133", "105", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("소속");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "13", "157", "105", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("이메일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "13", "181", "105", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("핸드폰");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "269", "109", "139", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("비밀번호 확인");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "269", "133", "139", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("성명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "269", "157", "139", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("시도코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "269", "181", "139", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("연락처");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pwd", "absolute", "120", "112", "147", "19", null, null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept", "absolute", "120", "136", "147", "19", null, null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email", "absolute", "120", "160", "147", "19", null, null, this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hp", "absolute", "120", "184", "147", "19", null, null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pwd_ok", "absolute", "412", "112", "160", "19", null, null, this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name", "absolute", "412", "136", "160", "19", null, null, this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tel", "absolute", "412", "184", "160", "19", null, null, this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Save", "absolute", "455", "216", "55", "24", null, null, this);
            obj.set_taborder("27");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "518", "216", "55", "24", null, null, this);
            obj.set_taborder("28");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_city_code", "absolute", "412", "160", "160", "19", null, null, this);
            this.addChild(obj.name, obj);
            var combo_city_code_innerdataset = new Dataset("combo_city_code_innerdataset", this.combo_city_code);
            combo_city_code_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">부산광역시</Col></Row><Row><Col id=\"codecolumn\">003</Col><Col id=\"datacolumn\">대구광역시</Col></Row><Row><Col id=\"codecolumn\">004</Col><Col id=\"datacolumn\">인천광역시</Col></Row><Row><Col id=\"codecolumn\">005</Col><Col id=\"datacolumn\">광주광역시</Col></Row><Row><Col id=\"codecolumn\">006</Col><Col id=\"datacolumn\">대전광역시</Col></Row><Row><Col id=\"codecolumn\">007</Col><Col id=\"datacolumn\">울산광역시</Col></Row><Row><Col id=\"codecolumn\">008</Col><Col id=\"datacolumn\">세종특별자치시</Col></Row><Row><Col id=\"codecolumn\">009</Col><Col id=\"datacolumn\">경기도</Col></Row><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">강원도</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">충청북도</Col></Row><Row><Col id=\"codecolumn\">012</Col><Col id=\"datacolumn\">충청남도</Col></Row><Row><Col id=\"codecolumn\">013</Col><Col id=\"datacolumn\">전라북도</Col></Row><Row><Col id=\"codecolumn\">014</Col><Col id=\"datacolumn\">전라남도</Col></Row><Row><Col id=\"codecolumn\">015</Col><Col id=\"datacolumn\">경상북도</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">경상남도</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">제주특별자치도</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">기타</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">기타테스트</Col></Row></Rows>");
            obj.set_innerdataset(combo_city_code_innerdataset);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 590, 248, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LEGAL_OFFICIAL_REGISTER");
            		p.style.set_font("bold 9 Dotum");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_officialNo","value","ds_official","legalOfficialinfoRelaNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","combo_sep","value","ds_official","legalOfficialinfoRelaSep");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_pwd","value","ds_official","legalOfficialinfoLyrPsw");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_dept","value","ds_official","legalOfficialinfoTeamname");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_email","value","ds_official","legalOfficialinfoMail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_hp","value","ds_official","legalOfficialinfoHdpn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_name","value","ds_official","legalOfficialinfoLyrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_tel","value","ds_official","legalOfficialinfoPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","combo_city_code","value","ds_official","legalOfficialinfoCityCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LEGAL_OFFICIAL_REGISTER.xfdl", "Lib::common.xjs");
        this.registerScript("LEGAL_OFFICIAL_REGISTER.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        this.LEGAL_OFFICIAL_REGISTER_onload=function(obj,e){
        	trace(this.parent.id);
        	//데이터셋 초기화
        	this.ds_officialType.clearData();
        	this.ds_addr.clearData();
        	
        	this.ds_official.addRow();
        	
        	/*var str1=0;
        	var str2=0;
        	
        	for(i=0;i<=application.gds_cmmCd.rowcount;i++){
        		if(application.gds_cmmCd.getColumn(i,"classCode")=="Z01" && application.gds_cmmCd.getColumn(i,"useYn")=="Y"){
        			this.ds_officialType.addRow();
        			this.ds_officialType.setColumn(str1,"codeNo", application.gds_cmmCd.getColumn(i,"codeNo"));
        			this.ds_officialType.setColumn(str1,"codeName", application.gds_cmmCd.getColumn(i,"codeName"));
        			str1++;
        		}
        		if(application.gds_cmmCd.getColumn(i,"classCode")=="Q01" && application.gds_cmmCd.getColumn(i,"useYn")=="Y"){
        			this.ds_addr.addRow();
        			this.ds_addr.setColumn(str2,"codeNo", application.gds_cmmCd.getColumn(i,"codeNo"));
        			this.ds_addr.setColumn(str2,"codeName", application.gds_cmmCd.getColumn(i,"codeName"));
        			str2++;
        		}
        			this.ds_official.addRow();*/
        }

        // 닫기버튼 클릭
        this.btn_close_OnClick = function(obj,e){
        	this.close();
        }

        this.btn_clean_OnClick = function(obj,e){
        	this.ds_official.clearData();
        	this.ds_official.addRow();
        }

        this.btn_Insert_OnClick = function(obj,e){
        	//var radio = this.btn_radio.get_value;
        	
        	// 유효성 체크
        	if(this.edt_pwd.text == "") {
        		alert("비밀번호를 입력하세요.");
        		return
        	} else if(this.edt_pwd_ok.text == "") {
        		alert("비밀번호를 입력하세요.");
        		return
        	} else if(this.edt_hp.Text == "") {
        		alert("휴대폰번호를 입력하세요.");
        		return
        	} else if(this.edt_pwd.Text != this.edt_pwd_ok.Text) {
        		alert("비밀번호가 다릅니다.");
        		return
        	} else if(this.edt_email.Text == "") {  //null값 처리
        		alert("이메일을 입력하세요.");
        		return
        	} else if(this.edt_dept.Text == "") {
        		alert("소속명을 입력하세요.");
        		return
        	} else if(this.edt_name.Text == "") {
        		alert("성명을 입력하세요.");
        		return
        	} else if(this.edt_tel.Text == "") {
        		alert("연락처를 입력하세요.");
        		return
        	} else if(this.combo_city_code.Value =="") {
        		alert("시도를 선택하세요.");
        		return
        	}
        	
        	/*
        	var strSvcID = "legalOfficialsMgr";
        	var strURL = "legalofficials/legalOfficialsMgr.do";
        	var strInDataSets = "ds_input=ds_official:u";
        	var strOutDataSets = "";
        	var strArgument = "voClass='pdsystem.legalofficials.model.LegalOfficialsVO'";
        	var strCallbackFunc = "fnCallback";
        	*/
        	this.ds_official.set_updatecontrol(false);
        	
        	for(var k=0; k<this.ds_official.rowcount; k++)
        	{
        		trace("row type check :: "+this.ds_official.getRowType(k));
        		var rowType = this.ds_official.getRowType(k);
        		
        		if(this.edt_officialNo.value == "" || this.edt_officialNo.value == null){
        			this.ds_official.setRowType(k, Dataset.ROWTYPE_INSERT);
        		}else{
        			this.ds_official.setRowType(k, Dataset.ROWTYPE_UPDATE);
        	}
        		//if(rowType == Dataset.ROWTYPE_INSERT)	this.ds_official.setRowType(k, Dataset.ROWTYPE_UPDATE);
        	}
        	trace("saveXML :: "+this.ds_official.saveXML());
        	
        	this.gfn_transaction(this,
        		  "legalOfficialsMgr",
        		  "legalofficials/legalOfficialsMgr.do",
        		  "ds_input=ds_official:u",
        		  "",
        		  "",
        		  "fnCallback");
        		  
        }

        this.fnCallback = function(svcId,errcd,errmsg){

        	if (svcId == "legalOfficialsMgr") {
        		//if (ds_legalInfoReg.rowcount>0) {
        			//alert("Callback!!");
        				alert("저장 되었습니다.");
        			if(errcode<0){
        				alert(errmsg);
        				ds_legalInfoReg.GetColumn();
        			}
        	}
        	
        }

        this.edt_hp_OnCharChanged = function(obj,strPreText,strPostText)
        {
        	if(this.edt_hp.Value.Length() < 11) {
        		this.edt_hp.Mask = "###-###-#####";
        	} else {
        		this.edt_hp.Mask = "###-####-####";
        	}
        }

        
        //법률관계자조회
        this.officialSelect =  function(officialNo){
        	/*
        	var strSvcid = "getLegalOfficials";
        	var strURL="svc::legalofficials/officialsSelect.do";
        	var strInputDs = "";
        	var strOutputDs = "ds_official=ds_output";
        	var strParam = "officialNo=" + Quote(officialNo);
            var strFnCallback = "";
        	*/
        	this.gfn_transaction(this,
        		  "getLegalOfficials",
        		  "svc::legalofficials/legalOfficialsMgr.do",
        		  "ds_official=ds_output",
        		  "",
        		  "",
        		  "fnCallback");

        }

        //팝업창 콜백
        this.modal_callback = function(sSvcId,variant)
        {
        	
        	if(this.gfn_IsNull(variant)==false){
        			var sp = "";
        			sp = variant.split("&");
        			var sp1 = sp[0].split("=");
        			var sp2 = sp[1].split("=");
        			var sp3 = sp[2].split("=");
        			var sp4 = sp[3].split("=");
        			var sp5 = sp[4].split("=");
        			var sp6 = sp[5].split("=");
        			var sp7 = sp[6].split("=");
        			var sp8 = sp[7].split("=");
        			var sp9 = sp[8].split("=");
        			
        			this.ds_official.setColumn(0,"legalOfficialinfoRelaNo",sp1[1]);
        			this.ds_official.setColumn(0,"legalOfficialinfoLyrName",sp2[1]);
        			this.ds_official.setColumn(0,"legalOfficialinfoLyrPsw",sp3[1]);
        			this.ds_official.setColumn(0,"legalOfficialinfoTeamname",sp4[1]);
        			this.ds_official.setColumn(0,"legalOfficialinfoMail",sp5[1]);
        			this.ds_official.setColumn(0,"legalOfficialinfoPhone",sp6[1]);
        			this.ds_official.setColumn(0,"legalOfficialinfoHdpn",sp7[1]);
        			this.ds_official.setColumn(0,"legalOfficialinfoCityCode",sp8[1]);
        			this.ds_official.setColumn(0,"legalOfficialinfoRelaSep",sp9[1]);
        			
        	}
        }

        this.btn_officialSearch_onclick = function(obj,e)
        {
        			
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	 
        	var newChild = new ChildFrame;
        	newChild.init("LEGAL_OFFICIAL_CHECK2"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LEGAL_OFFICIAL_CHECK.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame()
        					, ""
        					, this
        					, "modal_callback");

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LEGAL_OFFICIAL_REGISTER_onload, this);
            this.sta_01.addEventHandler("onclick", this.sta_01_onclick, this);
            this.btn_officialSearch.addEventHandler("onclick", this.btn_officialSearch_onclick, this);
            this.combo_sep.addEventHandler("onitemchanged", this.Combo_sim_onitemchanged, this);
            this.btn_clean.addEventHandler("onclick", this.btn_clean_OnClick, this);
            this.edt_hp.addEventHandler("ontextchanged", this.edt_hp_OnCharChanged, this);
            this.Button_Save.addEventHandler("onclick", this.btn_Insert_OnClick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_OnClick, this);
            this.combo_city_code.addEventHandler("onitemchanged", this.Combo_sim_onitemchanged, this);

        };

        this.loadIncludeScript("LEGAL_OFFICIAL_REGISTER.xfdl");

       
    };
}
)();
