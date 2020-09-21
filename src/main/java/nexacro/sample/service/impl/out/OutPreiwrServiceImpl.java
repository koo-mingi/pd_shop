package nexacro.sample.service.impl.out;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.OutPreiwrDao;
import nexacro.sample.service.out.OutPreiwrService;
import nexacro.sample.vo.out.FileUploadVo;
import nexacro.sample.vo.out.OutPreiwrVo;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("outPreiwrService")
public class OutPreiwrServiceImpl extends EgovAbstractServiceImpl implements OutPreiwrService {

	@Resource(name="outPreiwrDao")
	private OutPreiwrDao outPreiwrDao;
	
	// 심급 정보 조회
	@Override
	public List<OutPreiwrVo> getPreiwrSelect(OutPreiwrVo searchVo) {
		return outPreiwrDao.getPreiwrSelect(searchVo);
	}

	// 준비서면 조회
	@Override
	public List<OutPreiwrVo> getPreiwrDetail(OutPreiwrVo searchVo) {
		return outPreiwrDao.getPreiwrDetail(searchVo);
	}
	
	// 준비서면 insert,update,delete
	@Override
	public void OutpreiwrCud(List<OutPreiwrVo> searchVo
											,List<FileUploadVo> fileVo) {
		
		int size = searchVo.size();
		
		for(int i = 0; i<size; i++){
			OutPreiwrVo outpreiwrVo = searchVo.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) outpreiwrVo;

			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				outPreiwrDao.OutPreiwrInsert(outpreiwrVo);
			} else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				outPreiwrDao.OutPreiwrUpdate(outpreiwrVo);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				outPreiwrDao.OutPreiwrDelete(outpreiwrVo);
			}
		}
		
		int size2 = fileVo.size();
		
		for(int i = 0; i<size2; i++){
			FileUploadVo fileUploadVo = fileVo.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) fileUploadVo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				outPreiwrDao.OutPreiwrFileUpload(fileUploadVo);
			}
		}
	}
} //end class
