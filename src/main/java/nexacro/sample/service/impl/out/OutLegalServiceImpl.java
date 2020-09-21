package nexacro.sample.service.impl.out;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import nexacro.sample.service.dao.ibatis.out.OutLegalDao;
import nexacro.sample.service.out.OutLegalService;
import nexacro.sample.vo.out.OutLegalVo;

@Service("outLegalService")
public class OutLegalServiceImpl implements OutLegalService {
	
	@Resource(name="outLegalDao")
	private OutLegalDao outLegalDao;
	
	//법률자문 조회
	@Override
	public List<OutLegalVo> getOutLegalAdList(OutLegalVo outLegalVo) {
		return outLegalDao.OutLegalAdList(outLegalVo);
	}
	
	//법률자문비 조회
	@Override
	public List<OutLegalVo> getOutLegalAdCostList(OutLegalVo outLegalVo) {
		return outLegalDao.getCostList(outLegalVo);
	}
	
	//법률자문비 insert, update, delete
	@Override
	public void OutlegalAdvCostCud(List<OutLegalVo> costVo,
														List<OutLegalVo> legalAdVo) {
		
		//회신내용
		int size1 = legalAdVo.size();
		
		for(int i =0; i<size1;i++){
			OutLegalVo outlegalVo = legalAdVo.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) outlegalVo;
			
			if(accessor.getRowType()==DataSet.ROW_TYPE_INSERTED){
				outLegalDao.OutLegalAdUpdate(outlegalVo);
			}
			else if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
				outLegalDao.OutLegalAdUpdate(outlegalVo);
			}
		}
		
		int size2 = costVo.size();
		
		for(int i =0; i<size2; i++){
			OutLegalVo outlegalVo = costVo.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) outlegalVo;
			
			if(accessor.getRowType()==DataSet.ROW_TYPE_DELETED){
				outLegalDao.deleteCost(outlegalVo);
			}
			else if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
				outLegalDao.updateCost(outlegalVo);
			}
			else if(accessor.getRowType()==DataSet.ROW_TYPE_INSERTED){
				outLegalDao.insertCost(outlegalVo);
			}
		}
	}
	
	
	@Override
	public void OutLegalCostDel(List<OutLegalVo> costVo) {
		int size2 = costVo.size();
		
		for(int i =0; i<size2; i++){
			OutLegalVo outlegalVo = costVo.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) outlegalVo;
			
			if(accessor.getRowType()==DataSet.ROW_TYPE_DELETED){
				outLegalDao.deleteCost(outlegalVo);
			}
			else if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
				outLegalDao.updateCost(outlegalVo);
			}
			else if(accessor.getRowType()==DataSet.ROW_TYPE_INSERTED){
				outLegalDao.insertCost(outlegalVo);
			}
		}
	}
}//end class
