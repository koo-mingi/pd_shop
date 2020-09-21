package nexacro.sample.service.dao.ibatis.out.web.outlegal.total;

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("outLegalWebDao")
public class OutLegalWebDao extends EgovAbstractDAO{
	
	//법률자문 검색
	public List getOutList(OutLegalWebVo outVO){
		return list("outwebSQL.outlegalWeb.outListWeb",outVO);
	}
	
	//법률자문 상세조회
	public List getDetail(OutLegalWebVo outVO){
		return list("outwebSQL.outlegalWeb.getDetailWeb",outVO);
	}
	
	//법률자문비 저장
	public int costInsert(OutLegalWebVo outVO){
		int result = 0;
		try {
			insert("outwebSQL.outlegalWeb.costInsertWeb", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;
	}
	
	//법률자문비 수정
	public int costUpdate(OutLegalWebVo outVO){
		int result = 0;
		try {
			update("outwebSQL.outlegalWeb.costUpdateWeb", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;
	}
	
	//법률자문비 삭제
	public int costDelete(OutLegalWebVo outVO){
		int result = 0;
		try {
			delete("outwebSQL.outlegalWeb.costDeleteWeb", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;
	}

	//변경(update)==법률자문회신사항
	public int updateOut(OutLegalWebVo outVO) {
		int result = 0;
		try {
			update("outwebSQL.outlegalWeb.outUpdateWeb", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;
	}
	
	//법률자문비 검색
	public List getCostList(OutLegalWebVo outVO){
		return list("outwebSQL.outlegalWeb.costListWeb",outVO);
	}
	
	//법률자문비 상세내역(ajax)
	public OutLegalWebVo getLegalAdReDetailList(OutLegalWebVo outVO) {
		return (OutLegalWebVo) getSqlMapClientTemplate().queryForObject("outwebSQL.outlegalWeb.getLegalAdReDetailList",outVO);
	}
	
	// 법률자문 total count
	public int getTotalCount(OutLegalWebVo vo) {
		
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outlegalWeb.totalCountWeb", vo);
	}
	
	
}
