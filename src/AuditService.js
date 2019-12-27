import axios from 'axios';

const url = 'http://localhost:4545/audits';

class AuditService {
    //Get Audits
    static getAudits() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(audit => ({
                        ...audit,
                        createdAt: new Date(audit.createdAt)
                    }))
                );
            } catch(err) {
               reject(err);  
            }
        })
    }

    static insertAudit() {
        return axios.audit(url, {
            title: this.title,
            device: [
                { device: this.device, rating: this.rating, quantity: this.quantity, operation: this.operation}
            ]
        });
    }

    static deleteAudit(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default AuditService;