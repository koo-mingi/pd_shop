package nexacro.sample.service.dao.ibatis.out.web.outlegal.total;

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.total.CodeWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutFixinfoWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutLawNoSearchWebVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;



@Repository("outFixinfoWebDAO")
public class OutFixinfoWebDAO extends EgovAbstractDAO{

	// 기일관리 팝업 total count
	public int getlawNoTotalCount(OutLawNoSearchWebVO lawNoVO) {
		System.out.println("==================	getlawNoTotalCount	==============");		
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outFixinfoWeb.getlawNoTotalCountWeb", lawNoVO);
	}
	
	// 기일관리 팝업 소송번호 조회
	public List getlawNoList(OutLawNoSearchWebVO lawNoVO) {
		System.out.println("==================	getlawNoList	==============");
		return list("outwebSQL.outFixinfoWeb.getlawNoListWeb",lawNoVO);
	}
	
	// code 
	/*public List getCode(CodeVO vo){
		
		return list("outFixinfo.getCode",vo);
	}*/
    public List getCode(CodeWebVO vo){
    	System.out.println("================== 1:	getCode	==============");
		return  getSqlMapClientTemplate().queryForList(
				"outwebSQL.outFixinfoWeb.getCodeWeb",vo);
	}
	
	// 심급갯수
	@SuppressWarnings("unchecked")
	public List getInstanceList(String lawsuitAdmNo) {
		System.out.println("================== 2:	getInstanceList	==============");
		return list("outwebSQL.outFixinfoWeb.getInstanceListWeb",lawsuitAdmNo);
	}
	
	// 기일관리 기본 조회 ( 소송 심급)
	@SuppressWarnings("unchecked")
	public Object getLawList(OutFixinfoWebVO fixVO) {	
		System.out.println("================== 4:	getLawList	==============");
		return selectByPk("outwebSQL.outFixinfoWeb.getLawListWeb", fixVO);
	}	
		 
    // 기일관리 total Count
    public int getFixinfoTotalCount(OutFixinfoWebVO fixVO) {
    	System.out.println("================== 3:	getFixinfoTotalCount	==============");
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outFixinfoWeb.getFixinfoTotalCountWeb", fixVO);
	}
    
	// 기일관리 기본 조회 ( 기일)
	@SuppressWarnings("unchecked")
	public List getFixinfoList(OutFixinfoWebVO fixVO) {		
		System.out.println("================== 5:	getFixinfoList	==============");
		return list("outwebSQL.outFixinfoWeb.getFixinfoListWeb",fixVO);
	}	
	
	// 기일관리 상세 조회 ( 기일)
	@SuppressWarnings("unchecked")
	public Object getFixinfoDetail(OutFixinfoWebVO fixVO) {
		System.out.println("==================	getFixinfoDetail	==============");
		return selectByPk("outwebSQL.outFixinfoWeb.getFixinfoDetailWeb", fixVO);
	}	
	
	// 기일관리 입력
	public int insertFixinfo(OutFixinfoWebVO fixVO){
		System.out.println("==================	insertFixinfo	==============");
		int result = 0;
		
		try{
			
			insert("outwebSQL.outFixinfoWeb.lawFixinfoInsertWeb",fixVO);			
			result = 1;
			
		}catch(Exception e){
			
			System.out.println(e);
			return result = 3;
		}
		return result;
	}
	
	// 기일관리 수정
	public int updateFixinfo(OutFixinfoWebVO fixVO){
		System.out.println("==================	updateFixinfo	==============");
		
         int result = 0;
		
		try{
			
			update("outwebSQL.outFixinfoWeb.lawFixinfoUpdateWeb",fixVO);	
			result = 1;
			
		}catch(Exception e){
			
			System.out.println(e);
			return result = 3;
		}
		return result;
			
	}
	
	// 기일관리 삭제
	public int deleteFixinfo(OutFixinfoWebVO fixVO){
		System.out.println("==================	deleteFixinfo	==============");
        int result = 0;
		
		try{
			
			update("outwebSQL.outFixinfoWeb.lawFixinfoDeleteWeb",fixVO);	
			result = 1;
			
		}catch(Exception e){
			
			System.out.println(e);
			return result = 3;
		}
		return result;
	}
	
}