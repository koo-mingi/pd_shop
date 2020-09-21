package nexacro.sample.service.dao.ibatis.out;

import java.util.List;

import nexacro.sample.vo.out.FileUploadVo;
import nexacro.sample.vo.out.OutPreiwrVo;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("outPreiwrDao")
public class OutPreiwrDao extends EgovAbstractDAO{

	//심급 정보 조회
	@SuppressWarnings("unchecked")
	public List<OutPreiwrVo> getPreiwrSelect(OutPreiwrVo searchVo){
		return (List<OutPreiwrVo>)list("getPreiwrListSelect", searchVo);
	}
	
	//준비서면 정보 조회
	@SuppressWarnings("unchecked")
	public List<OutPreiwrVo> getPreiwrDetail(OutPreiwrVo searchVo){
		return (List<OutPreiwrVo>) list("getPreiwrDetailListSelect",searchVo);
	}
	
	//준비서면 insert
	public void OutPreiwrInsert(OutPreiwrVo preiwrVo){
		insert("preiwr_insert", preiwrVo);
	}
	
	//준비서면 update
	public void OutPreiwrUpdate(OutPreiwrVo preiwrVo){
		update("preiwr_update",preiwrVo);
	}
	
	//준비서면 delete
	public void OutPreiwrDelete(OutPreiwrVo preiwrVo){
		delete("preiwr_delete",preiwrVo);
	}
	
	//파일 upload
	public void OutPreiwrFileUpload(FileUploadVo fileVo){
		insert("preiwr_insertFile", fileVo );
	}
}
