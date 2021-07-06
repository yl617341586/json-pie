/*
 * @author: Lew
 * @e-mail: yaolu@codemao.cn
 * @date: 2021/07/01 21:25:19
 * @description:
 */
import { PathLike } from 'fs';
import * as fs from 'fs/promises';

class JsonPie {
    constructor(path?: PathLike, data?: unknown[] | unknown) {
        //如果data为空仅创建文件，path为空啥也不干
        //TODO
    }

    private json: any;

    /**
     * 创建文件
     * @param path 文件路径
     * @param data 初始化数据
     * @returns 反馈信息
     */
    async create(path: PathLike, data?: unknown[] | unknown): Promise<string> {
        // TODO
        const stats = await fs.stat(path);
        if (stats.isFile()) {
            this.json = '';
        }
        return new Promise((resolve, reject) => {
            resolve('创建文件成功');
            resolve('初始化数据成功');
            reject(new Error('创建文件失败'));
            reject(new Error('初始化数据失败'));
        });
    }

    save();
}
export default JsonPie;
