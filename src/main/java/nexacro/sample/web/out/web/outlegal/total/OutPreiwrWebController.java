package nexacro.sample.web.out.web.outlegal.total;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.UnsupportedEncodingException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nexacro.sample.service.out.web.outlegal.total.OutEdocAdmWebService;
import nexacro.sample.service.out.web.outlegal.total.OutFixinfoWebService;
import nexacro.sample.service.out.web.outlegal.total.OutPreiwrWebService;
import nexacro.sample.vo.out.web.outlegal.total.CodeWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;
import nexacro.sample.web.out.web.json.ConvertJson;
import nexacro.sample.web.out.web.outlegal.common.ImageProcessingUtil;
import nexacro.sample.web.out.web.outlegal.common.RegexStringUtil;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import egovframework.rte.fdl.property.EgovPropertyService;
import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;


@Controller
public class OutPreiwrWebController {

	@Resource(name="outPreiwrWebService")
	private OutPreiwrWebService outPreiwrWebService;

	@Resource(name = "outFixinfoWebService")
	private OutFixinfoWebService outFixinfoWebService;
	@Resource(name = "outEdocAdmWebService")
	private OutEdocAdmWebService outEdocAdmWebService;

	/*@Resource(name = "propertiesService")
	private EgovPropertyService propertiesService;
*/

	// 준비서면
	@RequestMapping(value = "OUT_PRE_ENT_IWR_WEB.do")
	public ModelAndView preiwrListSelect(ModelAndView mv, OutLegalWebVo outVO,HttpSession sess,String reqNo,String code) throws Exception{

		ModelAndView mav = new ModelAndView();
		mav.setViewName("OUT_main");
		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";
		center = "../jsp/out/OUT_PRE_ENT_IWR.jsp";

		mav.addObject("top"	,top);
		mav.addObject("center" ,center);

		outVO.setLegaladvOutReqLyrid(sess.getAttribute("outid").toString());
		outVO.setPreIwrOutLyrid(sess.getAttribute("outid").toString());

		if(reqNo==null){
			if(outVO.getLawsuitAdmNo()==null){
				outVO.setLawsuitAdmNo("0");
			}
		}else{
			outVO.setLawsuitAdmNo(reqNo);
		}
		if(code==null){
			if(outVO.getInstAdmCode()==null){
				outVO.setInstAdmCode("001");
			}
		}else{
			if(code.equals("1")){
				code="001";
			}else if(code.equals("2")){
				code="002";
			}else if(code.equals("3")){
				code="003";
			}
			outVO.setInstAdmCode(code);
		}

		int curpage=outVO.getPageIndex();
		int totCnt = 0;

		PaginationInfo paginationInfo = new PaginationInfo();

		// 법원 코드세팅
		CodeWebVO vo = new CodeWebVO();
		vo.setClassCode("A01");
		String lawNo = outVO.getLawsuitAdmNo(); // 심급 갯수 조회용
		try {

			// 법원 코드 조회
			List codeSet= outFixinfoWebService.getCode(vo);
			mav.addObject("cortCode", codeSet);

			// 심급갯수		
			List instSet = outFixinfoWebService.getInstanceList(lawNo);
			System.out.println("@@@@@ 심급갯수: "+ instSet.get(0));
			mav.addObject("instSet", instSet);

			totCnt = outPreiwrWebService.getTotalCount(outVO);

			paginationInfo.setTotalRecordCount(totCnt);
			paginationInfo.setCurrentPageNo(curpage);
			paginationInfo.setRecordCountPerPage(outVO.getRecordCountPerPage());
			paginationInfo.setPageSize(outVO.getPageSize());

			mav.addObject("paginationInfo", paginationInfo);

			// 첫 페이지 
			outVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
			// 마지막 페이지
			outVO.setLastIndex(paginationInfo.getLastRecordIndex());

			//outVO.setLegaladvLawAdvReqNo("");
			
			System.out.println("========================> ");
			// 리스트 조회
			List preiwrListSelect = outPreiwrWebService.getPreiwrListSelect(outVO);
			//준비서면 상세내역 
			List preiwrDetailListSelect = outPreiwrWebService.getPreiwrDetailListSelect(outVO);
			mav.addObject("preiwrListSelect", preiwrListSelect);
			mav.addObject("preiwrDetailListSelect", preiwrDetailListSelect);
			mav.addObject("outVO", outVO);

		} catch (Exception e) {
			e.printStackTrace();
		}

		//		outPreiwrVo.setLegaladvOutReqLyrid(outId);
		return mav;	
	}

	// 준비서면 상세정보(ajax)
	@RequestMapping(value = "OUT_PRE_ENT_IWR_DE_WEB.do")
	public void preiwrListSelectDe(ConvertJson convertJson, OutLegalWebVo outVO, HttpServletResponse response ) throws Exception{

//		outVO.setLawsuitAdmNo(params.get("lawsuitAdmNo"));
//		outVO.setInstAdmCode(params.get("instAdmCode"));
//		outVO.setPreIwrNo(params.get("preIwrNo"));

		
			List list = outPreiwrWebService.getPreiwrDetailList(outVO);
			String jsonStr = "";
			convertJson.setList(list, outVO);		
			jsonStr = convertJson.getJsonStr();
			response.getWriter().print(jsonStr);
	}

	//준비서면 팝업
	@RequestMapping(value="OUT_PRE_ENT_IWR_POP_WEB.do")
	public ModelAndView getListPreEntPop(ModelAndView mv, OutLegalWebVo outVO, HttpSession sess) throws Exception{

		ModelAndView mav = new ModelAndView();
		
		System.out.println("=========================================search2="+outVO.getSearch2());
		if(outVO.getSearch2()=="1차"){
			outVO.setSearch2("001");
		}else if(outVO.getSearch2()=="2차"){
			outVO.setSearch2("002");
		}else if(outVO.getSearch2()=="3차"){
			outVO.setSearch2("003");
		}else if(outVO.getSearch2()=="4차"){
			outVO.setSearch2("004");
		}else if(outVO.getSearch2()=="5차"){
			outVO.setSearch2("005");
		}else if(outVO.getSearch2()=="6차"){
			outVO.setSearch2("006");
		}else if(outVO.getSearch2()=="7차"){
			outVO.setSearch2("007");
		}else if(outVO.getSearch2()=="8차"){
			outVO.setSearch2("008");
		}else if(outVO.getSearch2()=="9차"){
			outVO.setSearch2("009");
		}else if(outVO.getSearch2()=="10차"){
			outVO.setSearch2("010");
		}
		
		PaginationInfo paginationInfo = new PaginationInfo();
		mav.setViewName("out/OUT_PRE_ENT_IWR_POP");

		String id = sess.getAttribute("outid").toString();
		if(id != null){
			outVO.setInstAdmEntLyrId(id);
		}

		int curpage= outVO.getPageIndex();
		int totCnt = 0;

		try {

			totCnt = outPreiwrWebService.getTotalCountPop(outVO);

			paginationInfo.setTotalRecordCount(totCnt);
			paginationInfo.setCurrentPageNo(curpage);
			paginationInfo.setRecordCountPerPage(outVO.getRecordCountPerPage());
			paginationInfo.setPageSize(outVO.getPageSize());

			mav.addObject("paginationInfo", paginationInfo);

			// 첫 페이지 
			outVO.setFirstIndex(paginationInfo.getFirstRecordIndex()+1);
			// 마지막 페이지
			outVO.setLastIndex(paginationInfo.getLastRecordIndex());

			// 리스트 조회
			List LawNoSearch = outPreiwrWebService.LawNoSearch(outVO);		

			mav.addObject("LawNoSearch", LawNoSearch);
			mav.addObject("outVO", outVO);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return mav;	
	}

	//준비서면 저장
	@RequestMapping(value="OUT_PRE_ENT_IWR_SAVE_WEB.do")
	public ModelAndView getListReSave(OutLegalWebVo outVO,HttpSession sess) throws Exception{

		ModelAndView mav = new ModelAndView();
		System.out.println("=================================================LegaladvLawAdvReqNo="+outVO.getLegaladvLawAdvReqNo());
		System.out.println("=================================================InstAdmCode="+outVO.getInstAdmCode());
		System.out.println("=================================================PreIwrNo="+outVO.getPreIwrNo());
		outVO.setPreIwrOutLyrid(sess.getAttribute("outid").toString());
		int result=0;
		if(outVO.getPreIwrNo()==null||outVO.getPreIwrNo().equals("")||outVO.getPreIwrNo().equals(null)){
			result = outPreiwrWebService.preiwr_insert(outVO);	
		}else{
			result = outPreiwrWebService.preiwr_update(outVO);
		}	

		if (result == 1) {
			System.out.println("등록되었습니다.");
		} else {
			System.out.println("등록시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		mav.setViewName("redirect:OUT_PRE_ENT_IWR_WEB.do?reqNo=" + outVO.getLawsuitAdmNo()+"&code="+outVO.getInstAdmCode());	
		return mav;	
	}
	//준비서면 삭제
	@RequestMapping(value="OUT_PRE_ENT_IWR_DELETE_WEB.do")
	public ModelAndView getListReDelete(OutLegalWebVo outVO,HttpSession sess) throws Exception{

		ModelAndView mav = new ModelAndView();

		outVO.setPreIwrOutLyrid(sess.getAttribute("outid").toString());
		int result=outPreiwrWebService.preiwr_delete(outVO);	

		if (result == 1) {
			System.out.println("삭제되었습니다.");
		} else {
			System.out.println("삭제시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		mav.setViewName("redirect:OUT_PRE_ENT_IWR_WEB.do?reqNo=" + outVO.getLawsuitAdmNo()+"&code="+outVO.getInstAdmCode());	
		return mav;	
	}
	//첨부파일 팝업
	@RequestMapping(value="AddFilePop1.do")
	public ModelAndView getListPreEntPop1(@ModelAttribute("outVO") OutLegalWebVo outVO, HttpSession sess,String lawNo,String instCode,String preNo) throws Exception{

		ModelAndView mav = new ModelAndView();

		mav.setViewName("out/AddFilePop1");

		int curpage=outVO.getPageIndex();
		int totCnt = 0;
		if(lawNo!=null){
			outVO.setLawsuitAdmNo(lawNo);
		}
		if(instCode!=null){
			outVO.setInstAdmCode(instCode);
		}
		if(preNo!=null){
			outVO.setPreIwrNo(preNo);
		}
		System.out.println("==========================LawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("==========================InstAdmCode="+outVO.getInstAdmCode());
		System.out.println("==========================PreIwrNo="+outVO.getPreIwrNo());
		PaginationInfo paginationInfo = new PaginationInfo();

		String outId =sess.getAttribute("outid").toString();
		outVO.setInstAdmEntLyrId(outId);
		try {
			totCnt = outPreiwrWebService.getTotalCountFile(outVO);

			// 현재 페이지 번호
			paginationInfo.setCurrentPageNo(curpage);
			// 한페이지당 게시물 로우수
			paginationInfo.setRecordCountPerPage(outVO.getRecordCountPerPage());
			// 페이지 리스트에 게시되는 개수
			paginationInfo.setPageSize(outVO.getPageSize());
			// 전체 게시물 건수
			paginationInfo.setTotalRecordCount(totCnt);

			// 조회용 첫 페이지 
			outVO.setFirstIndex(paginationInfo.getFirstRecordIndex()+1);
			// 조회용 마지막 페이지
			outVO.setLastIndex(paginationInfo.getLastRecordIndex());

			mav.addObject("paginationInfo", paginationInfo);

			// 리스트 조회
			List addFileList = outPreiwrWebService.getPreFile(outVO);	

			mav.addObject("addFileList", addFileList);
			mav.addObject("outVO", outVO);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return mav;	
	}

	/* 첨부파일 팝업 업로드 --ajax */
	@RequestMapping("addFilePrePopUpOutWEB.do")
	public void addFilePrePopUpOutWEB(HttpServletRequest request, HttpServletResponse response, OutLegalWebVo outLegalWebVo){
		
		DiskFileItemFactory factory = new DiskFileItemFactory();		
		ServletFileUpload upload = new ServletFileUpload(factory);
		List<FileItem> list = null;
		
		try {
			list = upload.parseRequest(request);
		} catch (FileUploadException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Iterator iter = list.iterator();

System.out.println(iter); //== 출력테스트
		

while(iter.hasNext()){
	
	//===========================================
	
	FileItem item = (FileItem) iter.next();
	
	if(item.isFormField()){
		String name = item.getFieldName();
		String value = null;
					
	
		try {
			value = item.getString("EUC-KR"); //인코딩
		} catch (UnsupportedEncodingException e) {				
			e.printStackTrace();
		} 

System.out.println(name +" : " + value); //== 출력테스트
		
		if(name.equals("lawsuitAdmNo")) {outLegalWebVo.setLawsuitAdmNo(value);}
		else if(name.equals("instAdmCode")) {outLegalWebVo.setInstAdmCode(value);}	
		else if(name.equals("preIwrNo")) {outLegalWebVo.setPreIwrNo(value);}	
		
	}else{
		//==============================================
	 	String fileName = item.getName(); //파일명 얻기			 	

	 	System.out.println(fileName); //== 출력테스트 
	 	
	 	String fileRealName
        = fileName.substring(0, fileName.lastIndexOf("."));

	 	
	 	String fileExt = fileName.substring(fileName.lastIndexOf("."));

        Date today = new Date();//오늘날자구하기
		DateFormat sd1 = new SimpleDateFormat("yyyy년MM월dd일");//ex) 20010101 식으로 날자출력
		DateFormat sd2 = new SimpleDateFormat("HH시mm분ss초");
		String nalja = sd1.format(today);//String형으로 변환
		String sigan = sd2.format(today);//String형으로 변환

		File dir = new File("\\\\192.168.0.50\\1.Setup\\06.08기 인트라넷\\FileUpDown\\"+nalja);
		dir.mkdir();
		String uploadedFileName = nalja +sigan + fileRealName + fileExt;

		File uploadedFile
		= new File("C:/Users/kjungsik/Desktop/20150512/smky_prj/WebContent/img/"+nalja+"/"+uploadedFileName);
        try {
			item.write(uploadedFile);
		} catch (Exception e) {
			e.printStackTrace();
		}
					
        outLegalWebVo.setAddFileSerPath("http://127.0.0.1:8081/smky_prj/img/"+nalja+"/"+uploadedFileName);;	        

	}		
}//while

		
		
		
		
		
	}
	
	
	//첨부파일 팝업 업로드
	@RequestMapping(value="AddFilePrePopUp_WEB.do")
	public ModelAndView getListPreEntPopUp(OutLegalWebVo outVO,@RequestParam("file") MultipartFile file) throws Exception{

		ModelAndView mav = new ModelAndView();
		/** MVC : VIEW */
		mav.setViewName("redirect:AddFilePop1.do?lawNo="+outVO.getLawsuitAdmNo()+"&instCode="+outVO.getInstAdmCode()+"&preNo="+outVO.getPreIwrNo());
		//				mav.setViewName("redirect:AddFilePop?reqNo=" + outVO.getLawsuitAdmNo());
		/** MVC : MODEL */
		byte[] bytes = null;

		//		String[] full=filename.split(".");
		//		String FileNMS = full[0];
		//		String EXT = full[1];

		String full=file.getOriginalFilename();
		System.out.println("======================full="+full);
		String[] fullName=full.split("\\.");
		System.out.println("======================fullName="+fullName);
		String PcFileName =fullName[0];
		String Ext=fullName[1];
		System.out.println("======================PcFileName="+PcFileName);
		System.out.println("======================Ext="+Ext);
		bytes = file.getBytes();
		//		GregorianCalendar calender = new GregorianCalendar();
		//		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddhh");
		//		String dateTime = dateFormat.format(calender.getTime());

		Date date=new Date(System.currentTimeMillis());
		SimpleDateFormat CurDateFormat=new SimpleDateFormat("YYYYMMddmm");
		String currentdate=CurDateFormat.format(date);

		// 2013-01-18.idealful.확장자 추출
		String fileExt = RegexStringUtil.extractRegexMatches("\\.\\w+\\z",
				file.getOriginalFilename()).substring(1);

		String fileName = "\\\\192.168.0.50\\1.Setup\\05.07기 인트라넷\\FileUpDown\\"+"준비서면_" + outVO.getLawsuitAdmNo() +"_"+ full;
		//		String serPath =  "\\\\192.168.0.50\\1.Setup\\05.07기 인트라넷\\FileUpDown\\";
		//		String PcFileName ="준비서면_"+ dateTime + "." + fileExt;
		File pathMaker = new File(fileName);
		new File(pathMaker.getParent()).mkdir();

		FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(fileName));

		//		FileWebVO fileVO = new FileWebVO();
		outVO.setLawsuitAdmNo(outVO.getLawsuitAdmNo());
		outVO.setInstAdmCode(outVO.getInstAdmCode());
		outVO.setPreIwrNo(outVO.getPreIwrNo());
		//				fileVO.setAddFileAdmName(f);
		outVO.setAddFilePcFile(PcFileName);
		outVO.setAddFilePcFileExt(Ext);
		outVO.setAddFileSize(file.getBytes().length);

		//				fileVO.setAddFileSerFileName(dateTime + "." + fileExt);
		//				fileName = "FileUpDown\\" + insideDirectory + "\\";
		//				fileVO.setAddFileSerPath(serPath);
		outVO.setAddFileAdmName("준비서면_"+outVO.getLawsuitAdmNo());
		//fileVO.setFileGbnCode(vo.getBbsCode());

		if (ImageProcessingUtil.isImage(fileExt)) {
			int[] xy = ImageProcessingUtil.sizeXY(file.getInputStream());

			outVO.setImgHeight(xy[0] + "");
			outVO.setImgWidth(xy[1] + "");
		} else {
			outVO.setImgHeight("");
			outVO.setImgWidth("");
		}
		//				fileVO.setRegistDate(new Date(Calendar.getInstance().getTime()
		//						.getTime()));
		//fileVO.setBbsCode(vo.getBbsCode());

		// insert
		int result = outPreiwrWebService.getFileWrite(outVO);
		int result1 = outPreiwrWebService.insertFilePre(outVO);

		if (result == 1) {
			System.out.println("정상적으로 글이 등록되었습니다.");
		} else {
			System.out.println("파일없는글 등록시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}

		return mav;
	}
	//준비서면 파일 삭제
	@RequestMapping(value="deleteFilePop1.do")
	public ModelAndView DeletePreFilePop(OutLegalWebVo outVO,HttpSession sess) throws Exception{

		ModelAndView mav = new ModelAndView();
		System.out.println("++++++++++++++++===lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("++++++++++---instAdmCode="+outVO.getInstAdmCode());
		System.out.println("++++++++++---PreIwrNo="+outVO.getPreIwrNo());
		System.out.println("++++++++++---addFileRelSeq="+outVO.getAddFileRelSeq());
		String[] all1=outVO.getLawsuitAdmNo().split(",");
		String[] all2=outVO.getInstAdmCode().split(",");
		String[] all3=outVO.getPreIwrNo().split(",");
		String[] all4=outVO.getAddFileRelSeq().split(",");
		String a=all1[0];
		String b=all2[0];
		String c=all3[0];
		String d=all4[0];
		outVO.setLawsuitAdmNo(a);
		outVO.setInstAdmCode(b);
		outVO.setPreIwrNo(c);
		outVO.setAddFileRelSeq(d);
		System.out.println("++++++++++++++++===lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("++++++++++---instAdmCode="+outVO.getInstAdmCode());
		System.out.println("++++++++++---PreIwrNo="+outVO.getPreIwrNo());
		System.out.println("++++++++++---addFileRelSeq="+outVO.getAddFileRelSeq());
		outVO.setPreIwrOutLyrid(sess.getAttribute("outid").toString());
		int result=outPreiwrWebService.deletePreFile(outVO);	

		if (result == 1) {
			System.out.println("삭제되었습니다.");
		} else {
			System.out.println("삭제시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		mav.setViewName("redirect:AddFilePop1.do?lawNo=" + outVO.getLawsuitAdmNo()+"&instCode="+outVO.getInstAdmCode()+"&preNo="+outVO.getPreIwrNo());	
		return mav;	
	}	
	//준비서면 파일 다운로드
	@RequestMapping(value="downloadFilePre.do")
	public ModelAndView downloadFilePre(OutLegalWebVo outVO,HttpSession sess,HttpServletResponse response) throws Exception{

		ModelAndView mav = new ModelAndView();
		System.out.println("++++++++++++++++===lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("++++++++++---instAdmCode="+outVO.getInstAdmCode());
		System.out.println("++++++++++---PreIwrNo="+outVO.getPreIwrNo());
		System.out.println("++++++++++---addFileRelSeq="+outVO.getAddFileRelSeq());
		System.out.println("++++++++++---addFileSerFileName="+outVO.getAddFileSerFileName());
		String[] all1=outVO.getLawsuitAdmNo().split(",");
		String[] all2=outVO.getInstAdmCode().split(",");
		String[] all3=outVO.getPreIwrNo().split(",");
		String[] all4=outVO.getAddFileRelSeq().split(",");
		String[] all5=outVO.getAddFileSerFileName().split(",");
		String a=all1[0];
		String b=all2[0];
		String c=all3[0];
		String d=all4[0];
		String e=all5[0];
		outVO.setLawsuitAdmNo(a);
		outVO.setInstAdmCode(b);
		outVO.setPreIwrNo(c);
		outVO.setAddFileRelSeq(d);
		outVO.setAddFileSerFileName(e);
		System.out.println("++++++++++++++++===lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("++++++++++---instAdmCode="+outVO.getInstAdmCode());
		System.out.println("++++++++++---PreIwrNo="+outVO.getPreIwrNo());
		System.out.println("++++++++++---addFileRelSeq="+outVO.getAddFileRelSeq());
		System.out.println("++++++++++---addFileSerFileName="+outVO.getAddFileSerFileName());
		outVO.setPreIwrOutLyrid(sess.getAttribute("outid").toString());
		//		String fileName = "\\\\192.168.0.50\\1.Setup\\05.07기 인트라넷\\FileUpDown\\"+outVO.getAddFileSerFileName();
		//		InputStream input =new ByteArrayInputStream(fileName.getBytes()); 
		//
		//		FileCopyUtils.copy(input, new FileOutputStream("C:\\Users\\Administrator\\Desktop\\"+outVO.getAddFileSerFileName()));
		@SuppressWarnings("deprecation")
		String strFilename=outVO.getAddFileSerFileName();
		String strFilenameOutput=new String(strFilename.getBytes("euc-kr"),"8859_1");
		File file=new File("\\\\192.168.0.50\\1.Setup\\05.07기 인트라넷\\FileUpDown\\"+strFilename);
		byte bb[]=new byte[(int)file.length()];
		response.setHeader("Content-Disposition","attachment;filename="+strFilenameOutput);
		response.setHeader("Content-Length",String.valueOf(file.length()));
		if(file.isFile()){
			BufferedInputStream fin=new BufferedInputStream(new FileInputStream(file));
			BufferedOutputStream outs=new BufferedOutputStream(response.getOutputStream());
			int read=0;
			while((read=fin.read(bb))!=-1){
				outs.write(bb,0,read);
			}
			outs.close();
			fin.close();
		}
//		mav.setViewName("redirect:AddFilePop1.do?lawNo=" + outVO.getLawsuitAdmNo()+"&instCode="+outVO.getInstAdmCode()+"&preNo="+outVO.getPreIwrNo());	
		return null;	
	}
}
