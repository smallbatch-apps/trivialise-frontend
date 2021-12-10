import BaseService from "./BaseService";

export default class DocumentService extends BaseService {
  entity = "documents";
  token = localStorage.getItem("token");

  upload(documentData: any) {
    const uploadFormData = new FormData();
    uploadFormData.append("title", documentData.title);
    uploadFormData.append("document", documentData.document);

    if (documentData.type) uploadFormData.append("type", documentData.type);
    if (documentData.questionId) uploadFormData.append("questionId", documentData.questionId);

    return fetch(process.env.REACT_APP_API_HOST + "/" + this.entity, {
      method: "POST",
      body: uploadFormData,
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}

export const documentService = new DocumentService();
