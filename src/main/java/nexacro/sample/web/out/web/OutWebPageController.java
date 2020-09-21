package nexacro.sample.web.out.web;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdUpVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class OutWebPageController {

	// 로그인 후 메인 화면
	@RequestMapping(value = "outMain.do")
	public ModelAndView outMain(HttpSession session) throws Exception {
		
		session.setAttribute("reqno", "0");
		
		ModelAndView mav = new ModelAndView();
		
		String center		= "";

		center = "../jsp/template/contents.jsp";
		
		mav.addObject("center" ,center);
		
		mav.setViewName("OUT_main");

		return mav;
	}//outMain()

	@RequestMapping("topPage.do")
	public String topPage(){
		return "template/top";
	}// topPage()
	
	@RequestMapping("bottomPage.do")
	public String bottomPage(){
		return "template/bottom";
	}//bottomPage()
	
	
	/* 페이지 이동 */
	
	/* 법률자문조회 페이지 이동 */
	@RequestMapping("Top_OUT_legal_ad_up.do")
	public String out_legal_ad_up(HttpSession session){
		session.setAttribute("center", "../jsp/out/OUT_legal_ad_up.jsp");
		return "OUT_main";
	}//out_legal_ad_up()

	
	/* 외부법률자문회신 페이지 이동 */
	@RequestMapping("Top_OUT_legal_ad_re_WEB.do")
	public String out_legal_ad_re_WEB(HttpSession session, OutLegalAdUpVO outLegalAdUpVO){

		session.setAttribute("center", "../jsp/out/OUT_legal_ad_re.jsp");
		
		if(session.getAttribute("reqno")==""||session.getAttribute("reqno")==null){
			session.setAttribute("reqno", "0");
		}
		
		
		return "OUT_main";		
	}// out_legal_ad_re_WEB()
	
	/* 파라미터값 세션에 처리 */
	@RequestMapping("post_OUT_legal_ad_re_WEB.do")
	public void post_Out_legal_ad_re_WEB(HttpServletResponse response, HttpSession session, OutLegalAdUpVO outLegalAdUpVO) throws IOException{

		session.setAttribute("reqno", "0");
	
		if(outLegalAdUpVO.getLegaladvLawAdvReqNo() !="" & outLegalAdUpVO.getLegaladvLawAdvReqNo()!=null){
			session.setAttribute("reqno", outLegalAdUpVO.getLegaladvLawAdvReqNo());			
		}
		response.getWriter().print("1");	
	}// out_legal_ad_re_WEB()
	
	
	/* 기일정보관리 페이지 이동 */
	@RequestMapping("OUT_fixinfo.do")
	public String out_fixinfo(HttpSession session){
		session.setAttribute("center", "../jsp/out/OUT_fixinfo.jsp");
		return "OUT_main";		
	}// out_fixinfo()
	
	
	// 준비서면
	@RequestMapping(value = "Top_OUT_PRE_ENT_IWR_WEB.do")
	public String out_pre_ent_iwr_WEB(HttpSession session){
		session.setAttribute("center", "../jsp/out/OUT_PRE_ENT_IWR.jsp");
		return "OUT_main";
	}
	
	/* 서증관리 페이지 이동 */
	@RequestMapping("Top_OUT_edoc_adm_WEB.do")
	public String out_edoc_adm_WEB(HttpSession session){
		session.setAttribute("center", "../jsp/out/OUT_edoc_adm.jsp");
		return "OUT_main";		
	}// out_edoc_adm_WEB()

	/* 소송번호조회페이지 */
	@RequestMapping("lawsuitAdmNoSearchPage.do")
	public String lawsuitAdmNoSearchPage(){
		return "out/OUT_LawNoSearch_POP";
	}// lawsuitAdmNoSearchPage
		
}// class
