package nexacro.sample.service.dao.ibatis.out.web.outlegal.total;

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;


@Repository("outPreiwrWebDao")
public class OutPreiwrWebDao extends EgovAbstractDAO {

	//준비서면 기본사항
	public List getPreiwrListSelect(OutLegalWebVo outVO) {
		return list("outwebSQL.outPreiwrWeb.getPreiwrListSelect", outVO);
	}
	
	//준비서면 상세내역
	public List getPreiwrDetailListSelect(OutLegalWebVo outVO) {
		return list("outwebSQL.outPreiwrWeb.getPreiwrDetailListSelect",outVO);
	}
	
	//준비서면 상세내역(ajax)
	public List getPreiwrDetailList(OutLegalWebVo outVO) {
		return list("outwebSQL.outPreiwrWeb.getPreiwrDetailListDe",outVO);
	}
	
	//준비서면 입력
	public int preiwr_insert(OutLegalWebVo outVO) {
		int result = 0;
		try {
			insert("outwebSQL.outPreiwrWeb.preiwr_insert", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}
	
	//준비서면 수정
	public int preiwr_update(OutLegalWebVo outVO) {
		int result = 0;
		try {
			insert("outwebSQL.outPreiwrWeb.preiwr_update", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}
	
	//준비서면 삭제
	public int preiwr_delete(OutLegalWebVo outVO) {
		int result = 0;
		try {
			insert("outwebSQL.outPreiwrWeb.preiwr_delete", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;
	}
	
	//준비서면 팝업
	 public List getLawNoSearch(OutLegalWebVo outVO) throws Exception {
	    return list("outwebSQL.outPreiwrWeb.getLawNoSearch", outVO);
	 }
	//준비서면목록 count
	public int getTotalCount(OutLegalWebVo outVO) {
		
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outPreiwrWeb.totalCount", outVO);
	}
	//준비서면 팝업 count
	public int getTotalCountPop(OutLegalWebVo outVO) {
		
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outPreiwrWeb.totalCountPop", outVO);
	}
	
	//준비서면 파일 count
	public int getTotalCountFile(OutLegalWebVo outVO) {
		
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outPreiwrWeb.getTotalCountFile", outVO);
	}
	
	//준비서면 파일조회
	public List getPreFile(OutLegalWebVo outVO) {
		return list("outwebSQL.outPreiwrWeb.getPreFile", outVO);
	}

	//파일등록 입력
	public int getFileWrite(OutLegalWebVo outVO) {
		int result = 0;
		try {
			insert("outwebSQL.outPreiwrWeb.getFileWrite", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}	
	
	//준비서면 첨부파일내역 등록
	public int insertFilePre(OutLegalWebVo outVO) {
		int result = 0;
		try {
			insert("outwebSQL.outPreiwrWeb.insertFilePre", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}	
	
	//준비서면 파일삭제
	public int deletePreFile(OutLegalWebVo outVO) {
		int result = 0;
		try {
			update("outwebSQL.outPreiwrWeb.deletePreFile", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}
}
