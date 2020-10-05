(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "IjectJS", "file", "./nexacro14lib/component/IjectJS", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib.component", "file", "./nexacro14lib/component", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib.framework", "file", "./nexacro14lib/framework/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib.resources", "file", "./nexacro14lib/resources/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "svcurl", "JSP", "http://localhost:8080/pd_shop/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "img", "file", "./img/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Frame", "form", "./Frame/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Lib", "js", "./Lib/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Install", "file", "./Install/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Template", "form", "./Template/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Test", "form", "./Test/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "Pattern", "form", "./Pattern/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "exam", "form", "./exam/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "depo", "form", "./depo/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "lawsuit", "form", "./lawsuit/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "rais", "form", "./rais/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "legal_ad", "form", "./legal_ad/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "com", "form", "./com/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "prgr", "form", "./prgr/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "member", "form", "./member/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "out", "form", "./out/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "adm", "form", "./adm/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "Css", "file", "./Css/", "session", null, "", "0", "0");
            this._addService("default_typedef.xml", "comp", "form", "./comp/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "noti", "form", "./noti/", "dynamic", null, "", "", "0");
            this._addService("default_typedef.xml", "stats", "form", "./stats/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "aprv", "form", "./aprv/", "dynamic", null, "", "", "0");
            this._addService("default_typedef.xml", "conc", "form", "./conc/", "dynamic", null, "", "", "0");
            this._addService("default_typedef.xml", "debt", "form", "./debt/", "dynamic", null, "", "", "0");
            this._addService("default_typedef.xml", "product", "form", "./product/", "dynamic", null, "", "", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
            		{"id":"ExtFileUpload", "classname":"nexacro.ExtFileUpload", "type":"JavaScript"},
            		{"id":"ExtFileDownload", "classname":"nexacro.ExtFileDownload", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gv_host", "http://localhost/", "false", "false");
            this._addVariable("gv_userAuth", "admin", "false", "false");
            this._addVariable("gv_openOnlyOne", "true", "false", "false");
            this._addVariable("gv_loadCnt", "0", "false", "false");

            // global image
            this._addImage("15N_btn", "img::15N_btn.bmp");
            this._addImage("15N_btn01_70", "img::15N_btn01_70.bmp");
            this._addImage("15N_btn01_80", "img::15N_btn01_80.bmp");
            this._addImage("15N_btn01_120", "img::15N_btn01_120.bmp");
            this._addImage("15N_title_icon", "img::15N_title_icon.bmp");
            this._addImage("add_file", "img::add_file.bmp");
            this._addImage("btn_Excel", "img::btn_Excel.bmp");
            this._addImage("btn_Input", "img::btn_Input.bmp");
            this._addImage("btn_SA_SearchS", "img::btn_SA_SearchS.bmp");
            this._addImage("btn_그리드추가", "img::btn_그리드추가.bmp");
            this._addImage("btn_삭제", "img::btn_삭제.bmp");
            this._addImage("btn_새로고침", "img::btn_새로고침.bmp");
            this._addImage("btn_수정", "img::btn_수정.bmp");
            this._addImage("btn_이미지열기", "img::btn_이미지열기.bmp");
            this._addImage("btn_입력", "img::btn_입력.bmp");
            this._addImage("btn_전결", "img::btn_전결.bmp");
            this._addImage("btn_조회", "img::btn_조회.bmp");
            this._addImage("btn_중복확인", "img::btn_중복확인.bmp");
            this._addImage("btn_확인", "img::btn_확인.bmp");
            this._addImage("btn목록", "img::btn목록.bmp");
            this._addImage("btn반려", "img::btn반려.bmp");
            this._addImage("btn상신", "img::btn상신.bmp");
            this._addImage("btn입력", "img::btn입력.bmp");
            this._addImage("btn저장", "img::btn저장.bmp");
            this._addImage("btn종료", "img::btn종료.bmp");
            this._addImage("chemu_tab", "img::chemu_tab.bmp");
            this._addImage("court", "img::court.bmp");
            this._addImage("detail", "img::detail.bmp");
            this._addImage("dots", "img::dots.bmp");
            this._addImage("family", "img::family.bmp");
            this._addImage("familydetail", "img::familydetail.bmp");
            this._addImage("gavel", "img::gavel.bmp");
            this._addImage("grid_line_1", "img::grid_line_1.bmp");
            this._addImage("icon_login_01", "img::icon_login_01.bmp");
            this._addImage("Jellyfish", "img::Jellyfish.bmp");
            this._addImage("lawH", "img::lawH.bmp");
            this._addImage("lawHam", "img::lawHam.bmp");
            this._addImage("pd_검색", "img::pd_검색.bmp");
            this._addImage("pd_신규", "img::pd_신규.bmp");
            this._addImage("pd_초기화", "img::pd_초기화.bmp");
            this._addImage("property", "img::property.bmp");
            this._addImage("propertydetail", "img::propertydetail.bmp");
            this._addImage("sbox_bl", "img::sbox_bl.bmp");
            this._addImage("sbox_br", "img::sbox_br.bmp");
            this._addImage("sbox_btn", "img::sbox_btn.bmp");
            this._addImage("sbox_tl", "img::sbox_tl.bmp");
            this._addImage("sbox_tr", "img::sbox_tr.bmp");
            this._addImage("sta_WF_subtitle", "img::sta_WF_subtitle.bmp");
            this._addImage("supreme_court", "img::supreme_court.bmp");
            this._addImage("Tab_res(2)", "img::Tab_res(2).bmp");
            this._addImage("Tab_res", "img::Tab_res.bmp");
            this._addImage("test1", "img::test1.bmp");
            this._addImage("title_bg", "img::title_bg.bmp");
            this._addImage("z0_검색", "img::z0_검색.bmp");
            this._addImage("z0_결재", "img::z0_결재.bmp");
            this._addImage("z0_다른이름으로저장", "img::z0_다른이름으로저장.bmp");
            this._addImage("z0_닫기", "img::z0_닫기.bmp");
            this._addImage("z0_등록취소", "img::z0_등록취소.bmp");
            this._addImage("z0_로그아웃", "img::z0_로그아웃.bmp");
            this._addImage("z0_로그인", "img::z0_로그인.bmp");
            this._addImage("z0_목록", "img::z0_목록.bmp");
            this._addImage("z0_사진등록", "img::z0_사진등록.bmp");
            this._addImage("z0_사진변경", "img::z0_사진변경.bmp");
            this._addImage("z0_삭제", "img::z0_삭제.bmp");
            this._addImage("z0_상세관리", "img::z0_상세관리.bmp");
            this._addImage("z0_상세보기", "img::z0_상세보기.bmp");
            this._addImage("z0_수정", "img::z0_수정.bmp");
            this._addImage("z0_신규", "img::z0_신규.bmp");
            this._addImage("z0_엑셀", "img::z0_엑셀.bmp");
            this._addImage("z0_원본이미지", "img::z0_원본이미지.bmp");
            this._addImage("z0_이전", "img::z0_이전.bmp");
            this._addImage("z0_저장", "img::z0_저장.bmp");
            this._addImage("z0_채무정보", "img::z0_채무정보.bmp");
            this._addImage("z0_첨부파일", "img::z0_첨부파일.bmp");
            this._addImage("z0_초기화", "img::z0_초기화.bmp");
            this._addImage("z0_취소", "img::z0_취소.bmp");
            this._addImage("z0_파일검색", "img::z0_파일검색.bmp");
            this._addImage("z0_파일삭제01", "img::z0_파일삭제01.bmp");
            this._addImage("z0_파일삭제02", "img::z0_파일삭제02.bmp");
            this._addImage("z0_파일이름변경", "img::z0_파일이름변경.bmp");
            this._addImage("z0_파일저장01", "img::z0_파일저장01.bmp");
            this._addImage("z0_파일저장02", "img::z0_파일저장02.bmp");
            this._addImage("z0_파일추가", "img::z0_파일추가.bmp");
            this._addImage("z0_프로그램종료", "img::z0_프로그램종료.bmp");
            this._addImage("공탁관리", "img::공탁관리.bmp");
            this._addImage("Image0", "img::공탁관리번호 조회.bmp");
            this._addImage("공통파일관리-경로지정화면", "img::공통파일관리-경로지정화면.bmp");
            this._addImage("공통파일관리-다른이름으로저장", "img::공통파일관리-다른이름으로저장.bmp");
            this._addImage("공통파일관리-삭제", "img::공통파일관리-삭제.bmp");
            this._addImage("공통파일관리-파일이름변경", "img::공통파일관리-파일이름변경.bmp");
            this._addImage("공통파일관리-파일이름변경2", "img::공통파일관리-파일이름변경2.bmp");
            this._addImage("기일정보관리등록", "img::기일정보관리등록.bmp");
            this._addImage("기일정보관리확인", "img::기일정보관리확인.bmp");
            this._addImage("내부자문", "img::내부자문.bmp");
            this._addImage("내부자문회신", "img::내부자문회신.bmp");
            this._addImage("Image1", "img::담당자 조회.bmp");
            this._addImage("법률자문목록", "img::법률자문목록.bmp");
            this._addImage("법률자문조회", "img::법률자문조회.bmp");
            this._addImage("법률자문회신", "img::법률자문회신.bmp");
            this._addImage("서증관리", "img::서증관리.bmp");
            this._addImage("소송관리", "img::소송관리.bmp");
            this._addImage("Image2", "img::소송관리번호 조회.bmp");
            this._addImage("소송담당자", "img::소송담당자.bmp");
            this._addImage("소송종결", "img::소송종결.bmp");
            this._addImage("소송추가사항", "img::소송추가사항.bmp");
            this._addImage("Image3", "img::소제기 의뢰 검색.bmp");
            this._addImage("Image4", "img::소제기 의뢰 등록.bmp");
            this._addImage("Image5", "img::소제기 의뢰 회신.bmp");
            this._addImage("소제기의뢰", "img::소제기의뢰.bmp");
            this._addImage("소제기의뢰등록", "img::소제기의뢰등록.bmp");
            this._addImage("소제기의뢰현황", "img::소제기의뢰현황.bmp");
            this._addImage("소제기의뢰회신", "img::소제기의뢰회신.bmp");
            this._addImage("외부기일정보", "img::외부기일정보.bmp");
            this._addImage("외부서증관리", "img::외부서증관리.bmp");
            this._addImage("외부소송관리번호", "img::외부소송관리번호.bmp");
            this._addImage("외부자문", "img::외부자문.bmp");
            this._addImage("외부자문회신", "img::외부자문회신.bmp");
            this._addImage("외부준비서면", "img::외부준비서면.bmp");
            this._addImage("응소보고", "img::응소보고.bmp");
            this._addImage("응제소보고", "img::응제소보고.bmp");
            this._addImage("Image6", "img::재판외 화해.bmp");
            this._addImage("제소보고", "img::제소보고.bmp");
            this._addImage("조정안관리", "img::조정안관리.bmp");
            this._addImage("준비서면", "img::준비서면.bmp");
            this._addImage("채무자등록-개인", "img::채무자등록-개인.bmp");
            this._addImage("채무자등록-기타", "img::채무자등록-기타.bmp");
            this._addImage("Image7", "img::채무자등록-담당자 사원번호 검색.bmp");
            this._addImage("채무자등록-법인", "img::채무자등록-법인.bmp");
            this._addImage("채무자등록-사업자", "img::채무자등록-사업자.bmp");
            this._addImage("채무자등록-외국인", "img::채무자등록-외국인.bmp");
            this._addImage("채무자등록-우편번호", "img::채무자등록-우편번호.bmp");
            this._addImage("채무자등록-원본이미지", "img::채무자등록-원본이미지.bmp");
            this._addImage("채무자등록-이미지저장", "img::채무자등록-이미지저장.bmp");
            this._addImage("채무자목록", "img::채무자목록.bmp");
            this._addImage("채무정보01", "img::채무정보01.bmp");
            this._addImage("채무정보02", "img::채무정보02.bmp");
            this._addImage("채무정보03", "img::채무정보03.bmp");
            this._addImage("채무정보04", "img::채무정보04.bmp");
            this._addImage("크기변환_tong", "img::크기변환_tong.bmp");
            this._addImage("크기변환_공통코드마스터", "img::크기변환_공통코드마스터.bmp");
            this._addImage("크기변환_공통코드상세", "img::크기변환_공통코드상세.bmp");
            this._addImage("크기변환_공통파일관리", "img::크기변환_공통파일관리.bmp");
            this._addImage("크기변환_이자율관리", "img::크기변환_이자율관리.bmp");
            this._addImage("크기변환_채무자등록", "img::크기변환_채무자등록.bmp");
            this._addImage("크기변환_통계", "img::크기변환_통계.bmp");
            this._addImage("크기변환_회사로고", "img::크기변환_회사로고.bmp");
            this._addImage("판결보고", "img::판결보고.bmp");
            this._addImage("포맷변환_크기변환_회사로고", "img::포맷변환_크기변환_회사로고.bmp");
            this._addImage("품의관리01", "img::품의관리01.bmp");
            this._addImage("품의관리02", "img::품의관리02.bmp");
            this._addImage("품의관리03", "img::품의관리03.bmp");
            this._addImage("품의관리04", "img::품의관리04.bmp");
            this._addImage("회사로고", "img::회사로고.bmp");

            // global dataset
            var obj = null;
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">쇼핑몰시스템</Col><Col id=\"MENU_SEQ\">0</Col><Col id=\"MENU_ID\">1000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120831000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_ID\"/><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">상품</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1100</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">상품목록</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">product::PRODUCT_LIST.xfdl</Col><Col id=\"MENU_TOP\">1001</Col><Col id=\"MENU_ID\">1101</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20200923000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col><Col id=\"UPDATE_DT\">20200923000000000</Col></Row><Row><Col id=\"MENU_NAME\">상품등록</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">product::PRODUCT_ADD.xfdl</Col><Col id=\"MENU_TOP\">1001</Col><Col id=\"MENU_ID\">1102</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20200923000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20200923000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">H</Col></Row><Row><Col id=\"MENU_NAME\"/><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">rais::RAISREQ_REG.xfdl</Col><Col id=\"MENU_TOP\">1001</Col><Col id=\"MENU_ID\">1004</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col><Col id=\"PAGE_ID\"/></Row><Row><Col id=\"MENU_NAME\"/><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">rais::RAISREQ_REP.xfdl</Col><Col id=\"MENU_TOP\">1001</Col><Col id=\"MENU_ID\">1005</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col><Col id=\"PAGE_ID\"/></Row><Row><Col id=\"MENU_NAME\"/><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1001</Col><Col id=\"MENU_ID\">1009</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_URL\">noti::LAWSUIT_NOTI.xfdl</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_AUTH\">NORMAL</Col><Col id=\"PAGE_ID\">LAWSUIT_NOTI.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">소송관리</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1005</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송접수관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1005</Col><Col id=\"MENU_ID\">1006</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col><Col id=\"PAGE_URL\">lawsuit::lawsuit_list.xfdl</Col><Col id=\"PAGE_ID\">lawsuit_list.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">소송진행</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1007</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">응소(제소)보고관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">prgr::ales_sue.xfdl</Col><Col id=\"MENU_TOP\">1007</Col><Col id=\"MENU_ID\">1050</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">ales_sue.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">서증관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">prgr::edoc_adm.xfdl</Col><Col id=\"MENU_TOP\">1007</Col><Col id=\"MENU_ID\">1051</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">edoc_adm.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송기일정보관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">prgr::law_fixinfo.xfdl</Col><Col id=\"MENU_TOP\">1007</Col><Col id=\"MENU_ID\">1045</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">:law_fixinfo.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">준비서면관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">prgr::PRE_IWR001.xfdl</Col><Col id=\"MENU_TOP\">1007</Col><Col id=\"MENU_ID\">1047</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">PRE_IWR001.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">조정안관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">prgr::MEDIATION001.xfdl</Col><Col id=\"MENU_TOP\">1007</Col><Col id=\"MENU_ID\">1046</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">MEDIATION001.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">재판외화해관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_ID\">1008</Col><Col id=\"MENU_TOP\">1007</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">prgr::LAWSUIT_REC001.xfdl</Col><Col id=\"PAGE_ID\"/><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">신체감정관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"PAGE_URL\">exam::Exam.xfdl</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1007</Col><Col id=\"MENU_ID\">1052</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">Exam.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송종결</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1199</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">판결보고</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1009</Col><Col id=\"MENU_ID\">1053</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\">conc::judg_report.xfdl</Col><Col id=\"PAGE_ID\">judg_report.xfdl</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송종결</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1009</Col><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\">comp::comp_lawsuit001.xfdl</Col><Col id=\"PAGE_ID\">comp_lawsuit001.xfdl</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송지원</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1011</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\"/><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col></Row><Row><Col id=\"MENU_NAME\">공탁관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">depo::deposit_re.xfdl</Col><Col id=\"MENU_TOP\">1011</Col><Col id=\"MENU_ID\">1012</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170712000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">deposit_re.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">법률자문의뢰</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"CREATE_DT\">20170726000000000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_ID\">1041</Col><Col id=\"MENU_TOP\">1011</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\">legal_ad::legal_ad.xfdl</Col><Col id=\"PAGE_ID\">legal_ad.xfdl</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">법률자문회신</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170726000000000</Col><Col id=\"MENU_ID\">1043</Col><Col id=\"MENU_TOP\">1011</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\">legal_ad::legal_ad_up.xfdl</Col><Col id=\"PAGE_ID\">legal_ad_up.xfdl</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">법률자문위임</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170726000000000</Col><Col id=\"MENU_ID\">1042</Col><Col id=\"MENU_TOP\">1011</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\">legal_ad::legal_ad_mandate.xfdl</Col><Col id=\"PAGE_ID\">legal_ad_mandate.xfdl</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송통계</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ID\">1019</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_ID\"/><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소제기의뢰현황</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_TOP\">1019</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\">rais::RAISREQ_LIST.xfdl</Col><Col id=\"PAGE_ID\">RAISREQ_LIST.xfdl</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송종결현황</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">stats::comp_lawsuit_curr.xfdl</Col><Col id=\"MENU_TOP\">1019</Col><Col id=\"MENU_ID\">1024</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">comp_lawsuit_curr.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송미결현황</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">stats::unde_curr.xfdl</Col><Col id=\"MENU_TOP\">1019</Col><Col id=\"MENU_ID\">1025</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">unde_curr.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">법률자문건현황</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">stats::legal_ad_list.xfdl</Col><Col id=\"MENU_TOP\">1019</Col><Col id=\"MENU_ID\">1026</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">legal_ad_list.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">소송고지명세</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">noti::lawsuit_noti_list.xfdl</Col><Col id=\"MENU_TOP\">1019</Col><Col id=\"MENU_ID\">1201</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20200115000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">lawsuit_noti_list</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20200115000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">외부변호사시스템</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ID\">1014</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_ID\"/><Col id=\"MENU_AUTH\">OUTLAW</Col></Row><Row><Col id=\"MENU_NAME\">외부법률자문조회</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1014</Col><Col id=\"PAGE_URL\">out::OUT_legal_ad_up.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">1100</Col><Col id=\"CREATE_DT\">20191226</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20191226</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"PAGE_ID\">OUT_legal_ad_up.xfdl</Col><Col id=\"MENU_AUTH\">OUTLAW</Col></Row><Row><Col id=\"MENU_NAME\">외부법률자문회신</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1014</Col><Col id=\"PAGE_URL\">out::OUT_legal_ad_re.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">1101</Col><Col id=\"CREATE_DT\">20191226</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20191226</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"PAGE_ID\">OUT_legal_ad_re.xfdl</Col><Col id=\"MENU_AUTH\">OUTLAW</Col></Row><Row><Col id=\"MENU_NAME\">기일정보관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1014</Col><Col id=\"PAGE_URL\">out::OUT_fixinfo.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">1102</Col><Col id=\"CREATE_DT\">20191226</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20191226</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"PAGE_ID\">OUT_fixinfo.xfdl</Col><Col id=\"MENU_AUTH\">OUTLAW</Col></Row><Row><Col id=\"MENU_NAME\">준비서면</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1014</Col><Col id=\"PAGE_URL\">out::OUT_PRE_ENT_IWR.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">1103</Col><Col id=\"CREATE_DT\">20191226</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20191226</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"PAGE_ID\">OUT_PRE_ENT_IWR.xfdl</Col><Col id=\"MENU_AUTH\">OUTLAW</Col></Row><Row><Col id=\"MENU_NAME\">서증관리</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_TOP\">1014</Col><Col id=\"PAGE_URL\">out::OUT_edoc_adm.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">1104</Col><Col id=\"CREATE_DT\">20191226</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20191226</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"PAGE_ID\">OUT_edoc_adm.xfdl</Col><Col id=\"MENU_AUTH\">OUTLAW</Col></Row><Row><Col id=\"MENU_NAME\">결재</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ID\">1017</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_ID\"/><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">결재진행리스트</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ID\">1018</Col><Col id=\"MENU_TOP\">1017</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"PAGE_URL\">aprv::APRV_LIST.xfdl</Col><Col id=\"PAGE_ID\">APRV_LIST_ALL.xfdl</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">상신진행리스트</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">aprv::aprv_list_empl.xfdl</Col><Col id=\"MENU_TOP\">1017</Col><Col id=\"MENU_ID\">1054</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">aprv_list_empl.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">NORMAL</Col></Row><Row><Col id=\"MENU_NAME\">관리자기능</Col><Col id=\"MENU_SEQ\">0</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">1027</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">ADMIN</Col></Row><Row><Col id=\"MENU_NAME\">인사관리</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_AUTH\">ADMIN</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">adm::insa.xfdl</Col><Col id=\"MENU_TOP\">1027</Col><Col id=\"MENU_ID\">1055</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20200128000000000</Col><Col id=\"PAGE_ID\">insa.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20200128000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col></Row><Row><Col id=\"MENU_NAME\">전체결재리스트</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">aprv::APRV_LIST_ALL.xfdl</Col><Col id=\"MENU_TOP\">1027</Col><Col id=\"MENU_ID\">1032</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">ADMIN</Col></Row><Row><Col id=\"MENU_NAME\">결재단계등록</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">aprv::ApprLine.xfdl</Col><Col id=\"MENU_TOP\">1027</Col><Col id=\"MENU_ID\">1033</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">ADMIN</Col></Row><Row><Col id=\"MENU_NAME\">공통코드마스터관리</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">1028</Col><Col id=\"MENU_TOP\">1027</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">com::PD_IN_COM_MM001.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">ADMIN</Col></Row><Row><Col id=\"MENU_NAME\">공통코드상세관리</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">1029</Col><Col id=\"MENU_TOP\">1027</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">com::PD_IN_COM_MM002.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">ADMIN</Col></Row><Row><Col id=\"MENU_NAME\">회원가입승인관리</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">1031</Col><Col id=\"MENU_TOP\">1027</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">com::COM_INSA_ACPT.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">ADMIN</Col></Row><Row><Col id=\"MENU_NAME\">법률관계자등록</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">legal_ad::legal_ad_man.xfdl</Col><Col id=\"MENU_TOP\">1011</Col><Col id=\"MENU_ID\">1040</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">legal_ad_man.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170712000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">ADMIN</Col></Row><Row><Col id=\"MENU_NAME\">미구현</Col><Col id=\"MENU_SEQ\">0</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1050</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170801000000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170801000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">H</Col></Row><Row><Col id=\"MENU_NAME\">연결화면</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">1051</Col><Col id=\"MENU_TOP\">1050</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">lawsuit::test.xfdl</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170801000000000</Col><Col id=\"PAGE_ID\"/><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170801000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">H</Col></Row><Row><Col id=\"MENU_NAME\">기타</Col><Col id=\"MENU_SEQ\">0</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ID\">1032</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_ID\"/><Col id=\"MENU_AUTH\">H</Col></Row><Row><Col id=\"MENU_NAME\">샘플</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20170721000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"CREATE_DT\">20170721000000000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_ID\">1033</Col><Col id=\"MENU_TOP\">1032</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_ID\"/><Col id=\"MENU_AUTH\">H</Col></Row><Row><Col id=\"MENU_NAME\">Single Detail</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">Pattern::Pattern_01.xfdl</Col><Col id=\"MENU_TOP\">1033</Col><Col id=\"MENU_ID\">1034</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">Pattern_01.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">R</Col></Row><Row><Col id=\"MENU_NAME\">Multi Detail</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">Pattern::Pattern_02.xfdl</Col><Col id=\"MENU_TOP\">1033</Col><Col id=\"MENU_ID\">1035</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">Pattern_02.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">R</Col></Row><Row><Col id=\"MENU_NAME\">Excel Export&amp;Import</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">Pattern::Pattern_03.xfdl</Col><Col id=\"MENU_TOP\">1033</Col><Col id=\"MENU_ID\">1036</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">Pattern_03.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">H</Col></Row><Row><Col id=\"MENU_NAME\">File Up&amp;Down(Eco)</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">Pattern::Pattern_04.xfdl</Col><Col id=\"MENU_TOP\">1033</Col><Col id=\"MENU_ID\">1037</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">Pattern_04.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">H</Col></Row><Row><Col id=\"MENU_NAME\">CRUD샘플</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">Pattern::Pattern_05.xfdl</Col><Col id=\"MENU_TOP\">1033</Col><Col id=\"MENU_ID\">1038</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">Pattern_05.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">H</Col></Row><Row><Col id=\"MENU_NAME\">PAGING샘플</Col><Col id=\"MENU_SEQ\">2</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">Pattern::Pattern_06.xfdl</Col><Col id=\"MENU_TOP\">1033</Col><Col id=\"MENU_ID\">1039</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"PAGE_ID\">Pattern_06.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">admin</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">admin</Col><Col id=\"MENU_DESC\">II</Col><Col id=\"MENU_AUTH\">H</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"Desc_Url\" type=\"STRING\" size=\"256\"/><Column id=\"Desc_Url_ko\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_User", this);
            obj._setContents("<ColumnInfo><Column id=\"sabun\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"menuAuth\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsTransInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"strSvcID\" type=\"STRING\" size=\"256\"/><Column id=\"strURL\" type=\"STRING\" size=\"256\"/><Column id=\"strInDatasets\" type=\"STRING\" size=\"256\"/><Column id=\"strOutDatasets\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"string\" size=\"32\"/><Column id=\"MSG_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MSG_NM\" type=\"string\" size=\"32\"/><Column id=\"MSG_NOTE\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"MSG_CD\">fail.common.msg</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">error ocurred!</Col></Row><Row><Col id=\"MSG_CD\">fail.common.sql</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">sql error ocurred! error code: {0}, error msg: {1}</Col></Row><Row><Col id=\"MSG_CD\">info.nodata.msg</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">no data found.</Col></Row><Row><Col id=\"MSG_CD\">image.errorBg</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">error_en</Col></Row><Row><Col id=\"MSG_CD\">errors.required</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} is required.</Col></Row><Row><Col id=\"MSG_CD\">accounting.hgr_store_credit.amount.error</Col><Col id=\"MSG_TYPE\">AC</Col><Col id=\"MSG_NM\">HGR Store Credit does not have to remove.</Col></Row><Row><Col id=\"MSG_CD\">success.insert</Col><Col id=\"MSG_TYPE\">PU</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">success.update</Col><Col id=\"MSG_TYPE\">PU</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">success.delete</Col><Col id=\"MSG_TYPE\">PU</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">success.select</Col><Col id=\"MSG_TYPE\">PU</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">transaction.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">comm.select.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please select {0}</Col></Row><Row><Col id=\"MSG_CD\">comm.list.select.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please select from the list.</Col></Row><Row><Col id=\"MSG_CD\">success.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">comm.select.not.found</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">There is no data.</Col></Row><Row><Col id=\"MSG_CD\">comm.input.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please enter {0}</Col></Row><Row><Col id=\"MSG_CD\">comm.validation.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} is invalid.</Col></Row><Row><Col id=\"MSG_CD\">comm.print.barcode</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Want to print bar codes?</Col></Row><Row><Col id=\"MSG_CD\">main.title</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">:: HGR Industrial Surplus - We Buy  Everything! ::</Col></Row><Row><Col id=\"MSG_CD\">main.negotiation</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Looks back on 30 minutes after</Col></Row><Row><Col id=\"MSG_CD\">error.incorrect</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} is incorrect</Col></Row><Row><Col id=\"MSG_CD\">comm.button.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please click the {0} button.</Col></Row><Row><Col id=\"MSG_CD\">comm.data.check_status</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">The status of data has changed.</Col></Row><Row><Col id=\"MSG_CD\">comm.success.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">comm.register</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please save {0} information.</Col></Row><Row><Col id=\"MSG_CD\">comm.already.registered</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} already exists.</Col></Row><Row><Col id=\"MSG_CD\">comm.register.fail</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Failed to register. Please try again.</Col></Row><Row><Col id=\"MSG_CD\">common.date.input</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please enter date.</Col></Row><Row><Col id=\"MSG_CD\">success.inspection.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Inspection has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.bid.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Bid has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.createoffer.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Create Offer has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.po.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">PO has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.revised.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Revised Offer has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.exception.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Exception has been completed</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_Params", this);
            obj._setContents("<ColumnInfo><Column id=\"PARAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_VAL\" type=\"STRING\" size=\"2000\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_legalad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_aprverInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("packageB");
            this.set_version("");
            this.set_tracemode("");
            this.set_themeid("default.xtheme");
            this.set_filesecurelevel("0");
            this.set_networksecurelevel("0");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1302", "875", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("Design Package BType");
            mainframe.style.set_icon("URL('img::nexacro.ico')");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("childframe", "absolute", null, null, null, null, null, null, "", this);
            this.addChild(obj.name, obj);
            this.frame = obj;
            obj.set_formurl(application._quickview_formurl);
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj = null;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("packageB.xadl", function() {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 PackageB
        * BUSINESS    : 넥사크로플랫폼 PackageB
        * FILE NAME   : 
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : 
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 
        *------------------------------------------------------------------
        ***********************************************************************************/

        /**
         * Application 최초 로딩시 발생하는 이벤트 
         * @return
         * @example
         * @memberOf Global
         */
        this.application_onload = function(obj,e)
        {
           //초기 application onload setting
            Iject.appOnload(obj);            
        }

        

        

        
        
        });


        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("default.xtheme");

this.loadCss("Css::MainFrame.css");
this.loadCss("Css::LeftFrame.css");
this.loadCss("Css::MDIFrame.css");
this.loadCss("Css::TopFrame.css");
this.loadCss("Css::WorkFrame.css");
this.loadCss("Css::Login.css");

        this.loadIncludeScript("packageB.xadl");
    };
}
)();
