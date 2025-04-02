const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function createDoc() {
  // 사용자로부터 입력 받기
  const title = await new Promise(resolve => {
    rl.question('문서 제목을 입력하세요: ', resolve)
  })

  const description = await new Promise(resolve => {
    rl.question('문서 설명을 입력하세요: ', resolve)
  })

  const category = await new Promise(resolve => {
    rl.question('카테고리를 입력하세요 (예: javascript, react): ', resolve)
  })

  // 템플릿 읽기
  const templatePath = path.join(__dirname, '../.templates/doc-template.md')
  let template = fs.readFileSync(templatePath, 'utf8')

  // frontmatter 부분 수정
  const frontmatter = `---
title: "${title}"
description: "${description}"
sidebar_position: 1
---`

  // 기존 frontmatter 교체
  template = template.replace(/---\n(.|\n)*?---/, frontmatter)

  // 본문의 타이틀 교체
  template = template.replace('# {title}', `# ${title}`)

  // 파일명 생성 (공백을 하이픈으로 변환)
  const fileName = `${title.toLowerCase().replace(/\s+/g, '-')}.md`

  // 카테고리 디렉토리 확인 및 생성
  const categoryDir = path.join(__dirname, '../docs', category)
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true })
  }

  // 파일 저장
  const filePath = path.join(categoryDir, fileName)
  fs.writeFileSync(filePath, template)

  console.log(`✅ 문서가 생성되었습니다: ${filePath}`)
  rl.close()
}

createDoc().catch(console.error)
