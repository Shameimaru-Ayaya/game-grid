# ACGMN+Grid - ACGMN+生涯个人喜好表

![示例图](screenshot/me.png)

生成你自己的ACGMN+生涯个人喜好表！

标题，名称，全部可以自由定义！

## 欢迎Fork！

在遵守MIT License的前提下，欢迎自由的改写表格内容或自定义数据源进行分发。  
如果愿意，可以将自己创作的表格在原作[discussions](https://github.com/SomiaWhiteRing/gamegrid/discussions/2)中留言，原作看到后会更新在项目主页！

## 快速开始

克隆仓库并安装依赖项：

```bash
git clone https://github.com/yourusername/gamegrid.git
cd gamegrid
npm install
```

运行开发服务器：

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 环境变量（本地部署）

在本地根目录文件夹下创建`.env.local`文件，添加以下配置：

```bash
# SteamGridDB API配置
STEAMGRIDDB_API_KEY=your_steamgriddb_api_key

# Bangumi API配置
BANGUMI_ACCESS_TOKEN=your_bangumi_access_token
BANGUMI_USER_AGENT=your_user_agent

# Google Analytics配置（可选）
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### API密钥获取方式

- **SteamGridDB API Key**:
  1. 访问 [SteamGridDB](https://www.steamgriddb.com/)
  2. 注册并登录账号
  3. 在个人设置中申请 API 密钥

- **Bangumi Access Token**:
  1. 访问 [Bangumi API](https://bangumi.github.io/api/#/%E6%9D%A1%E7%9B%AE/getCalendar)
  2. 登录并创建应用
  3. 获取 Access Token
  4. 设置合适的 User Agent（参考[bangumiUA指南](https://github.com/bangumi/api/blob/master/docs-raw/user%20agent.md)）

- **Google Analytics ID**（可选）:
  1. 访问 [Google Analytics](https://analytics.google.com/)
  2. 创建账号并设置数据流
  3. 获取衡量 ID（格式：`G-XXXXXXXXXX`）
  4. 仅在生产环境启用，不配置则不启用追踪

**需要在项目根目录手动创建 `.env.local` 文件。这个文件通常不会被提交到Git仓库（应该在 `.gitignore` 中），所以在项目里找不到是正常的。**

让我帮你创建这个配置文件：

```bash
# SteamGridDB API配置
# 获取方式：https://www.steamgriddb.com/profile/preferences/api
STEAMGRIDDB_API_KEY=your_steamgriddb_api_key

# Bangumi API配置
# 获取方式：https://bgm.tv/dev/app
BANGUMI_ACCESS_TOKEN=your_bangumi_access_token
# User Agent格式示例：YourAppName/1.0 (https://yourwebsite.com) your@email.com
BANGUMI_USER_AGENT=GameGrid/1.0 (https://github.com/yourusername/yourrepo)

# Google Analytics配置（可选）
# 获取方式：https://analytics.google.com/
# 格式：G-XXXXXXXXXX
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### 设置步骤：

### 1. 创建 `.env.local` 文件
在你的项目根目录（与 `package.json` 同级）创建 `.env.local` 文件，复制上面的内容。

### 2. 获取各个 API 密钥

**SteamGridDB API Key:**
1. 访问 https://www.steamgriddb.com/
2. 注册并登录
3. 进入 Profile → Preferences → API
4. 生成 API Key

**Bangumi Access Token:**
1. 访问 https://bgm.tv/
2. 登录你的账号
3. 进入 https://bgm.tv/dev/app
4. 创建一个新应用（App）
5. 获取 Access Token

**Bangumi User Agent:**
- 格式：`应用名称/版本号 (网址) 联系邮箱`
- 示例：`GameGrid/1.0 (https://github.com/username/gamegrid) your@email.com`
- 这是 Bangumi API 的规范要求，用于标识你的应用

**Google Analytics ID（可选）:**
1. 访问 https://analytics.google.com/
2. 创建账号和数据流
3. 获取衡量 ID（格式：`G-XXXXXXXXXX`）

### 3. 填写配置
将获取到的真实密钥替换模板中的占位符：
```bash
STEAMGRIDDB_API_KEY=abc123xyz456  # 你的真实密钥
BANGUMI_ACCESS_TOKEN=def789ghi012  # 你的真实token
BANGUMI_USER_AGENT=GameGrid/1.0 (https://github.com/yourname/repo) your@email.com
```

### 4. 重启开发服务器
修改 `.env.local` 后需要重启 Next.js 开发服务器才能生效：
```bash
# 停止当前服务器（Ctrl+C）
# 然后重新启动
npm run dev
```

### 注意事项：
- `.env.local` 不应该提交到 Git（确保它在 `.gitignore` 中）
- 这些是私密信息，不要分享给他人
- 如果部署到生产环境（如Vercel），需要在平台的环境变量设置中添加这些配置


## 部署

### Vercel 部署（推荐）

1. Fork 本仓库到你的 GitHub 账号
2. 在 [Vercel](https://vercel.com) 导入项目
3. 在项目设置中添加环境变量：
   - `STEAMGRIDDB_API_KEY`
   - `BANGUMI_ACCESS_TOKEN`
   - `BANGUMI_USER_AGENT`
   - `NEXT_PUBLIC_GA_ID`（可选，用于 Google Analytics 追踪）
4. 部署完成
   
#### 方法一：通过Vercel Dashboard（推荐）

1. **进入项目设置**
   - 登录 https://vercel.com/
   - 选择你导入的项目
   - 点击顶部的 **Settings** 标签

2. **添加环境变量**
   - 在左侧菜单找到 **Environment Variables**
   - 点击进入环境变量设置页面

3. **逐个添加变量**
   对每个环境变量：
   - **Key (名称)**：输入变量名，如 `STEAMGRIDDB_API_KEY`
   - **Value (值)**：输入对应的API密钥
   - **Environment (环境)**：选择要应用的环境
     - ✅ **Production** (生产环境 - 必选)
     - ✅ **Preview** (预览环境 - 建议选)
     - ✅ **Development** (开发环境 - 可选)
   - 点击 **Add** 或 **Save**

4. **需要添加的环境变量**
   ```
   STEAMGRIDDB_API_KEY = your_steamgriddb_api_key
   BANGUMI_ACCESS_TOKEN = your_bangumi_access_token
   BANGUMI_USER_AGENT = GameGrid/1.0 (https://your-vercel-url.vercel.app) your@email.com
   NEXT_PUBLIC_GA_ID = your_google_analytics_id (可选)
   ```

5. **重新部署**
   - 添加完所有环境变量后
   - 进入 **Deployments** 标签
   - 找到最新的部署
   - 点击右侧的三个点 `...` → **Redeploy**
   - 或者推送新的commit到GitHub自动触发部署

#### 方法二：通过Vercel CLI

如果你安装了Vercel CLI：

```bash
# 安装Vercel CLI (如果还没安装)
npm i -g vercel

# 登录
vercel login

# 进入项目目录，添加环境变量
vercel env add STEAMGRIDDB_API_KEY
# 然后按提示输入值和选择环境

# 或者从.env.local批量导入
vercel env pull .env.local
```

#### 验证环境变量

部署完成后，你可以：
1. 查看部署日志，确认没有"环境变量缺失"的错误
2. 访问你的网站，测试Bangumi搜索功能是否正常工作
3. 在Vercel Dashboard的 **Environment Variables** 页面查看已添加的变量（值会被隐藏）

#### 注意事项：

- ⚠️ 以 `NEXT_PUBLIC_` 开头的变量会暴露到浏览器端，其他变量只在服务器端可用
- 🔒 已添加的环境变量值在Dashboard中会被隐藏（显示为 `***`）
- 🔄 修改环境变量后必须重新部署才能生效
- 📝 `BANGUMI_USER_AGENT` 建议填写你的Vercel域名，格式如：
  ```
  GameGrid/1.0 (https://your-project.vercel.app) your@email.com
  ```

添加完成后，你的应用就可以正常调用Bangumi和SteamGridDB的API了！

### 其他平台部署

确保在部署平台的环境变量配置中添加上述所有必需的环境变量。Google Analytics ID 为可选配置，不配置则不会启用追踪功能。

## 开发历程

本项目使用GitHub Copilot与Codex辅助开发，提高了开发效率和代码质量。

## 致谢

- 特别感谢[游戏生涯个人喜好表（已下线）](https://gamegrid.azurewebsites.net)项目的灵感，本项目是对该创意的致敬。
- 感谢 [SteamGridDB](https://www.steamgriddb.com/) 和 [Bangumi](https://bgm.tv/) 提供的API支持。

## 许可证

MIT许可证 - 详情请参阅[LICENSE](LICENSE)文件
