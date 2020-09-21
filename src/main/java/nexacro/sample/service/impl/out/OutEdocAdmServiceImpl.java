package nexacro.sample.service.impl.out;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import nexacro.sample.service.dao.ibatis.out.OutEdocAdmDao;
import nexacro.sample.service.out.OutEdocAdmService;
import nexacro.sample.vo.out.OutEdocAdmVo;

@Service("EdocAdmService")
public class OutEdocAdmServiceImpl implements OutEdocAdmService {
	
	@Resource(name="EdocAdmDao")
	private OutEdocAdmDao outEdocAdmDao;
	
	//소송정보 조회
	@Override
	public List<OutEdocAdmVo> getLawsuitSelect(OutEdocAdmVo edocVo) {
		return outEdocAdmDao.getLawsuitSelect(edocVo);
	}
	
	//호증정보 조회
	@Override
	public List<OutEdocAdmVo> getEdocAdmInfoGap(OutEdocAdmVo edocVo) {
		return outEdocAdmDao.getEdocAdmInfoGap(edocVo);
	}
	
	//호증정보 조회
	@Override
	public List<OutEdocAdmVo> getEdocAdmInfoEul(OutEdocAdmVo edocVo) {
		return outEdocAdmDao.getEdocAdmInfoEul(edocVo);
	}
	
	//호증정보 insert, update, delete
	@Override
	public void OutEdocAdmCud(List<OutEdocAdmVo> edocVo1
												,List<OutEdocAdmVo> edocVo2) {
		
		int size1 = edocVo1.size();
		int size2 = edocVo2.size();
		
		for(int i =0; i<size1; i++){
			
			OutEdocAdmVo outEdocAdmVo1 = edocVo1.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) outEdocAdmVo1;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				outEdocAdmDao.OutEdocAdmInsert(outEdocAdmVo1);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				outEdocAdmDao.OutEdocAdmUpdate(outEdocAdmVo1);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				outEdocAdmDao.OutEdocAdmDelete(outEdocAdmVo1);
			}
		}
		
		for(int i =0; i<size2; i++){
					
				OutEdocAdmVo outEdocAdmVo2 = edocVo2.get(i);
				
				DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) outEdocAdmVo2;
				
				if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
					outEdocAdmDao.OutEdocAdmInsert(outEdocAdmVo2);
				}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
					outEdocAdmDao.OutEdocAdmUpdate(outEdocAdmVo2);
				}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
					outEdocAdmDao.OutEdocAdmDelete(outEdocAdmVo2);
				}
			}
	}
}
