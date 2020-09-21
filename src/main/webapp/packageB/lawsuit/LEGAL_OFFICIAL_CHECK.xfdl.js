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
                this.set_name("LEGAL_OFFICIAL_CHECK");
                this.set_classname("LEGAL_OFFICIAL_CHECK");
                this.set_titletext("법률관계자 정보 조회");
                this._setFormPosition(0,0,551,470);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_officialType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_official", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"legalOfficialinfoRelaNo\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrPsw\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoRelaSep\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoTeamname\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoMail\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoPhone\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoHdpn\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoCityCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_official00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"select\">전체</Col><Col id=\"value\">000</Col></Row><Row><Col id=\"value\">001</Col><Col id=\"select\">판사</Col></Row><Row><Col id=\"value\">002</Col><Col id=\"select\">검사</Col></Row><Row><Col id=\"select\">변호사</Col><Col id=\"value\">003</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_02", "absolute", "14", "125", "522", "339", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "65", "522", "35", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "21", "70", "509", "25", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "523", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("   법률관계자 정보 조회");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search1", "absolute", "51", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_innerdataset("@ds_official00");
            obj.set_datacolumn("select");
            obj.set_codecolumn("value");
            obj.set_value("000");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Edit("edt_legal_input", "absolute", "186", "73", "230", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "422", "71", "55", "23", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "8", "108", "100", "13", null, null, this);
            obj.set_text("법률관계자 목록");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_person", "absolute", "21", "132", "508", null, null, "13", this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_official");
            obj.style.set_font("Dotum,9");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"114\"/><Column size=\"65\"/><Column size=\"110\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"법률관계자번호\"/><Cell col=\"1\" text=\"소속명\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:legalOfficialinfoRelaNo\"/><Cell col=\"1\" text=\"bind:legalOfficialinfoTeamname\"/><Cell col=\"2\" text=\"bind:legalOfficialinfoLyrName\"/><Cell col=\"3\" text=\"bind:legalOfficialinfoMail\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:legalOfficialinfoPhone\" mask=\"expr:legalOfficialinfoPhone.length == &quot;9&quot;? &quot;##-###-####&quot; : legalOfficialinfoPhone.length == &quot;11&quot;? &quot;###-####-####&quot; : (legalOfficialinfoPhone.substr(0,2) == &quot;02&quot; &amp;&amp; legalOfficialinfoPhone.length == &quot;10&quot;)? &quot;##-####-####&quot; : &quot;###-###-####&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_legal", "absolute", "480", "101", "55", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_text("신규");
            obj.set_visible("true");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 551, 470, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LEGAL_OFFICIAL_CHECK");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("법률관계자 정보 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LEGAL_OFFICIAL_CHECK.xfdl", "Lib::common.xjs");
        this.registerScript("LEGAL_OFFICIAL_CHECK.xfdl", function() {
        //include "Lib::common.xjs";

        var job = this.getOwnerFrame().job;

        this.LEGAL_OFFICIAL_CHECK_onload=function(obj,e)
        {
        	this.ds_officialType.clearData();
        	//this.gf_classCodeListLoad("ds_officialType",  "ds_officialType",  "Y", "fnCallback", "Z01"); //상단 캠퍼스구분 공통코드조회
        	this.gf_classCodeListLoad("ds_officialType",  "ds_officialType",  "Y", "fnCallback", "O02"); //상단 캠퍼스구분 공통코드조회
        	this.cmb_search1.set_value('000');
        }

        this.btn_search_onclick=function(obj,e)
        {
        	var search = this.cmb_search1.value;
            var search1= this.edt_legal_input.text;
            
        	var strSvcid="getLegalOfficials";
        	var strController="/lawsuit/getLegalOfficials.do";
        	if(search == "000"){
        		search = "";
        	}
        	var strParam="selectedId="+"\""+search+"\"";	//검색구분
        	strParam +="selectedId1="+"\""+search1+"\"";
        	trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_official=ds_output",strParam,"fnCallback");
        }

        this.grd_person_oncelldblclick=function(obj,e)
        {
        	var no = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoRelaNo");
        	var name = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoLyrName");
        	var psw = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoLyrPsw");
        	var team = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoTeamname");
        	var mail = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoMail");
        	var phn = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoPhone");
        	var hdpn = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoHdpn");
        	var city = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoCityCode");
        	var sep = this.ds_official.getColumn(this.ds_official.rowposition, "legalOfficialinfoRelaSep");
        	
        	this.close("no="+no+"&name="+name+"&psw="+psw+"&team="+team+"&mail="+mail+"&phn="+phn+"&hdpn="+hdpn+"&city="+city+"&sep="+sep);
        }

        this.edt_legal_input_onkeydown=function(obj,e)
        {
        	if(e.keycode=="13"){
        		this.btn_search_onclick();
        	}
        }

        this.fn_masktel=function(row)	//추후 재코딩 필요(간소화)
        {

        	var telcode = this.ds_official.getColumn(row, "legalOfficialinfoPhone"); //연락처
        	var telsize = telcode.length; //연락번호 길이
        	telcode = telcode.substr(0,2); //지역코드 추출

        	if(telcode = "02"){ //지역코드가 서울일 경우
        		
        		if(telsize == "9"){
        			return '##-###-####';
        		}else{
        			return '##-####-####';
        		}
        		
        	}else{
        		
        		var areacode = telcode.subStr(0,3); //시외코드 , 휴대폰코드 추출
        		
        		//시외 , 휴대폰 코드 
        		switch(areacode){
        			
        			case "031": //경기
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "032": //인천,부천
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "041": //충남
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "042": //대전	
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "043": //충북
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "044": //세종
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "051": //부산
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "052": // 울산
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "053": // 대구 , 경산
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "054": // 경북
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "055": // 경남
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "061": // 전남
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "062": // 광주
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "062": // 전북
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "064": // 제주
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "011": //SK
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "017": //SK
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "016": //KT
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "018": //KT
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "019": //LG
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "010": //통합
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;

        			case "070": //인터넷전화
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;
        			
        			default :
        				if(telsize == "10"){
        					return '###-###-####';
        				}else{
        					return '###-####-####';
        				}
        				break;		
        		}
        	}
        }

        this.fnCallback=function(svcid,errcd,errmsg)
        {
        	switch(svcid)
        	{
        		case "ds_officialType" :
        			trace(job);
        			trace(this.ds_officialType.saveXML());
        			this.cmb_search1.index = 0;
        			this.btn_search_onclick();
        		break;
        		case "getLegalOfficials" :
        			if(this.gfn_IsNull(job)==false){
        			//trace(this.ds_official.saveXML())
        				this.ds_official.filter("legalOfficialinfoRelaSep=="+job);
        			}
        			//trace(ds_official.saveXML());
        		break;
        	}
        }
        this.cmb_search1_onitemchanged=function(obj,e)
        {
        	if(e.postvalue==""){
        		this.edt_legal_input.value = "";
        		this.edt_legal_input.set_enable(false);
        	}else{
        		this.edt_legal_input.set_enable(true);
        	}
        }

        // 전화번호, 휴대폰 번호에 '-'을 추가해주는 함수
        this.phoneFomatter = function(num,type){

            var formatNum = '';

            if(num.length==11){

                if(type==0){

                    formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');

                }else{

                    formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

                }

            }else if(num.length==8){

                formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');

            }else{

                if(num.indexOf('02')==0){

                    if(type==0){

                        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');

                    }else{

                        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');

                    }

                }else{

                    if(type==0){

                        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');

                    }else{

                        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

                    }
                }
            }
            return formatNum;
        }

        this.btn_Legal_OnClick = function(obj,e)
        {
        	//	팝업화면 
        	//var v_rtnArr =  this.gf_dialog("RAISREQ_REG", "rais::POP_RAISREQ_SCH.xfdl", 0, 0, 700, 600, "", "Middle center",{objArguments:v_argParm});
        	
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	
        	// 차일드 프레임 생성 및 모달 창 출력
        	var newChild = new ChildFrame;
        	newChild.init("LEGAL_OFFICIAL_REGISTER"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "com::LEGAL_OFFICIAL_REGISTER.xfdl");
        					
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
            this.addEventHandler("onload", this.LEGAL_OFFICIAL_CHECK_onload, this);
            this.cmb_search1.addEventHandler("onitemchanged", this.cmb_search1_onitemchanged, this);
            this.edt_legal_input.addEventHandler("onkeydown", this.edt_legal_input_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_person.addEventHandler("oncelldblclick", this.grd_person_oncelldblclick, this);
            this.btn_legal.addEventHandler("onclick", this.btn_Legal_OnClick, this);

        };

        this.loadIncludeScript("LEGAL_OFFICIAL_CHECK.xfdl");

       
    };
}
)();
