// postbuild.mjs
// VitePress 默认生成「干净 URL + 扁平 .html 文件」（如 01-xxx.html），
// 但 GitHub Pages 等静态托管对 /dir/page/ 这类目录 URL 需要 index.html 才能服务。
// 本脚本为每个 .html 生成对应的 index.html，使干净 URL 在静态托管下可访问。
import { readdirSync, statSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DIST = 'docs/.vitepress/dist'

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      walk(full)
      continue
    }
    if (!entry.endsWith('.html')) continue
    const base = entry.slice(0, -5) // 去掉 .html
    if (base === 'index') continue // 已是 index.html，跳过
    if (base === 'README') {
      // /dir/  ->  /dir/index.html
      copyFileSync(full, join(dir, 'index.html'))
    } else {
      // /dir/page/  ->  /dir/page/index.html
      const sub = join(dir, base)
      mkdirSync(sub, { recursive: true })
      copyFileSync(full, join(sub, 'index.html'))
    }
  }
}

walk(DIST)
// 标记文件，便于确认脚本已执行
writeFileSync(join(DIST, '.postbuild-ok'), '')
console.log('✅ postbuild: 已为所有页面生成 index.html（兼容 GitHub Pages 干净 URL）')
