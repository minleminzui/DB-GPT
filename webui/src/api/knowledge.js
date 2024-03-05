import axiosReq from '@/utils/axios-req'

//获取知识库列表
export const knowledgeListReq = () => {
  return axiosReq({
    url: 'knowledge_base/list_knowledge_bases',
    params: {},
    method: 'get'
  })
}


//获取知识库内的文件列表
export const knowledgeFileDetailsReq = (knowledgeBaseName) => {
  return axiosReq({
    url: 'knowledge_base/kb_file_details',
    params: {knowledge_base_name: knowledgeBaseName},
    method: 'get'
  })
}

//删除知识库内的文件
export const knowledgeDeleteDocsReq = (knowledgeBaseName, fileName) => {
  return axiosReq({
    url: 'knowledge_base/delete_docs',
    data: {knowledge_base_name: knowledgeBaseName, file_names: [fileName], delete_content: true, not_refresh_vs_cache: false},
    method: 'post',
    reqLoading: false
  })
}

//获取知识库内的文件的切片
export const knowledgeFileSplitContentReq = (knowledgeBaseName, fileName) => {
  return axiosReq({
    url: 'knowledge_base/docs_text_split_content',
    data: {knowledge_base_name: knowledgeBaseName, file_names: [fileName]},
    method: 'post',
    reqLoading: false
  })
}


// 搜索知识库内的文件
export const knowledgeSearchDocsReq = (knowledgeBaseName, query) => {
  return axiosReq({
    url: 'knowledge_base/search_docs',
    data: {knowledge_base_name: knowledgeBaseName, query},
    method: 'post',
    reqLoading: false
  })
}

// 获取所有的embed模型
export const llmModelEmbedModelsReq = () => {
  return axiosReq({
    url: 'llm_model/embed_models',
    method: 'get',
    reqLoading: false
  })
}

// 获取所有的LLM模型
export const llmModelListModelsReq = () => {
  return axiosReq({
    url: 'llm_model/list_models',
    method: 'get',
    reqLoading: false
  })
}

// 获取知识库详情
export const knowledgeBaseDetailReq = (knowledgeBaseName) => {
  return axiosReq({
    url: 'knowledge_base/detail',
    params: {knowledge_base_name: knowledgeBaseName},
    method: 'get'
  })
}

// 更新知识库
export const knowledgeBaseUpdateInfoReq = (knowledgeBaseName, info) => {
  return axiosReq({
    url: 'knowledge_base/update_info',
    data: {knowledge_base_name: knowledgeBaseName, kb_info:info},
    method: 'post'
  })
}

// 删除知识库
export const knowledgeBaseDeleteReq = (knowledgeBaseName) => {
  return axiosReq({
    url: 'knowledge_base/delete_knowledge_base',
    data: knowledgeBaseName,
    method: 'post'
  })
}

// 创建知识库
export const createKnowledgeBaseReq = (knowledgeBaseName, info, embedModel) => {
  return axiosReq({
    url: 'knowledge_base/create_knowledge_base',
    data: {knowledge_base_name: knowledgeBaseName, info, embed_model: embedModel},
    method: 'post',
    reqLoading: false
  })
}

// LLm模型聊天
export const chatReq = (query, conversationId, modelName, history, historyLen) => {
  return axiosReq({
    url: 'chat/chat',
    data: {query, conversation_id: conversationId, model_name: modelName, history, prompt_name: 'default', temperature: 0.7, max_tokens: 0, history_len: historyLen},
    method: 'post',
    type: 'chat',
    reqLoading: false,
    timeout: 600000
  })
}

// 知识库聊天
export const knowledgeChatReq = (query, ignoreCache, answerCache, knowledgeBaseName, modelName, history, historyLen) => {
  return axiosReq({
    url: 'chat/knowledge_base_chat',
    data: {query, ignore_cache: ignoreCache, answer_cache: answerCache, knowledge_base_name: knowledgeBaseName,
      model_name: modelName, history, prompt_name: 'default',
      temperature: 0.7, max_tokens: 0, top_k: 3, score_threshold:0.5, history_len: historyLen},
    method: 'post',
    type: 'chat',
    reqLoading: false,
    timeout: 600000
  })
}

//上传文件到知识库内
export const knowledgeUploadDocsReq = (knowledgeBaseName, files, chunkSize=250, chunkOverlap=50, zhTitleEnhance=false) => {
  const formData = new FormData()
  formData.append('knowledge_base_name', knowledgeBaseName)
  formData.append('files', files)
  formData.append('override', true)
  formData.append('to_vector_store', true)
  formData.append('chunk_size', chunkSize)
  formData.append('chunk_overlap', chunkOverlap)
  formData.append('zh_title_enhance', zhTitleEnhance)
  return axiosReq({
    url: 'knowledge_base/upload_docs',
    data: formData,
    method: 'post',
    cache: false,
    contentType: false,
    processData: false,
    timeout: 0,
  })
}


// 获取数据库DDL
export const dbDdlInfoReq = (config) => {
  return axiosReq({
    url: 'db/db_ddl_info',
    data: {host: config.host, port: config.port, password: config.password, user: config.user, database: config.database},
    method: 'post',
    timeout: 10000
  })
}

// 生成sql语句
export const dbGenerateSqlReq = (query, ddl, modelName) => {
  return axiosReq({
    url: 'db/db_generate_sql',
    data: {query, ddl, model_name: modelName},
    method: 'post',
    type: 'chat',
    reqLoading: false,
    timeout: 10000
  })
}

export const dbExecuteSqlReq = (sql, host, user, password, database, port) => {
  return axiosReq({
    url: 'db/db_execute_sql',
    data: {host, user, password, database, port, sql},
    method: 'post',
    reqLoading: false,
    timeout: 20000
  })
}