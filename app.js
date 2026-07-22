// Embedded Initial Data for seamless local static deployment & CORS safety
const initialData = [
  {
    id: 1,
    company: "(주)와이비엠넷",
    department: "인사총무",
    name: "이우진",
    position: "과장",
    experience: "6년7개월",
    role: "평가·채용·교육",
    level: "개인활용",
    barrier: "AI 기초활용 역량 부족",
    topic: "각 사업별 AX 교육 사례 및 업무상 활용 방법",
    question: "",
    email: "dlm_305@ybm.co.kr",
    interest: "모두",
    industry: "교육서비스·에듀테크",
    business: "온라인 외국어교육, 기업교육, 자격·시험 서비스, 온·오프라인 블렌디드 및 스마트러닝",
    source: "https://company.ybmnet.co.kr/",
    need: "개인 단위의 단편적 AI 활용을 넘어 사업별·HR 기능별 활용 시나리오와 AX 교육 체계를 확보하려는 니즈",
    psychology: "AI 활용 의지는 높지만 기초역량 부족으로 실행 자신감이 낮고, 적용 범위가 넓어 무엇부터 시작할지 불확실한 상태로 추론됨",
    expectation: "사업별 AI 활용사례 벤치마크, HR 업무별 적용 우선순위, 바로 사용할 수 있는 프롬프트·도구, 사내 AX 교육 로드맵",
    reason: "개인활용 단계이며 장애물로 기초역량 부족을 명시했고, 사업별 사례와 업무 활용법을 희망함",
    confidence: "높음",
    date: "2026-07-22"
  },
  {
    id: 2,
    company: "동원산업",
    department: "HRG팀",
    name: "유소영",
    position: "사원",
    experience: "1년10개월",
    role: "교육기획·운영·사내강사",
    level: "조직도입",
    barrier: "AI 교육기법/도입방법 정보 부족",
    topic: "실제 HRD에서 활용 가능한 AI 에이전트와 AI 에이전트 제작 방법",
    question: "",
    email: "soyoung7278@dongwon.com",
    interest: "교육",
    industry: "수산업·지주사업",
    business: "원양어업·수산사업을 기반으로 한 사업 운영과 지주회사로서 계열사 지원, 전략적 투자 및 미래 성장동력 발굴",
    source: "https://www.dongwon.com/kr/business/dongwon-industries",
    need: "일반적인 생성형 AI 활용을 넘어 HRD 업무에 특화된 AI 에이전트를 직접 설계·제작하고 조직에 적용하려는 니즈",
    psychology: "실험과 도입 의지가 강하고 구체적 산출물을 원하는 적극적 상태이며, 개론 중심 교육에는 답답함을 느낄 가능성이 있음",
    expectation: "교육기획·운영용 에이전트 프로토타입, 노코드·로우코드 제작법, 업무흐름 연계 방법, 조직 도입 시 운영·보안 기준",
    reason: "조직도입 단계이고 학습희망주제가 AI 에이전트의 실제 활용과 제작 방법으로 매우 구체적임",
    confidence: "높음",
    date: "2026-07-22"
  },
  {
    id: 3,
    company: "(주)도루코",
    department: "HR팀",
    name: "전재욱",
    position: "매니저",
    experience: "3년7개월",
    role: "교육·채용·조직문화",
    level: "조직도입",
    barrier: "사내 보안 및 정보유출 우려; 저작권·할루시네이션",
    topic: "HRD 부문 AI 활용 사례(BP)",
    question: "",
    email: "jujeon@dorco.co.kr",
    interest: "전체",
    industry: "생활용품 제조업",
    business: "면도기·면도날을 중심으로 한 퍼스널케어 제품과 주방·생활용품의 개발, 제조 및 글로벌 판매",
    source: "https://www.dorco.co.kr/kor/main/",
    need: "보안·저작권·정확성 리스크를 통제하면서 제조기업 HRD에 적용할 수 있는 검증된 우수사례와 운영 기준을 확보하려는 니즈",
    psychology: "도입 필요성은 인정하지만 사고 발생 책임과 내부 통제 실패를 경계하는 신중하고 위험민감한 상태로 추론됨",
    expectation: "안전한 HRD 활용사례, 정보등급별 사용 기준, 할루시네이션 검증 절차, 저작권 체크리스트, 내부 설득용 도입 근거",
    reason: "조직도입 단계이나 장애물로 보안·정보유출·저작권·할루시네이션을 복수로 제시하고 BP를 요구함",
    confidence: "높음",
    date: "2026-07-22"
  },
  {
    id: 4,
    company: "대동",
    department: "인재혁신팀",
    name: "김민우",
    position: "대리",
    experience: "8개월",
    role: "HRD",
    level: "개인활용",
    barrier: "교육기법/도입방법 부족; ROI 증명 어려움",
    topic: "생성형 AI를 활용한 교육개발 기법",
    question: "",
    email: "mwkim@daedong.co.kr",
    interest: "인사,교육",
    industry: "농기계·스마트농업·AI 로보틱스",
    business: "트랙터 등 농기계 제조를 기반으로 스마트 농기계, 정밀농업 솔루션, 스마트팜, 모빌리티와 로보틱스 사업 전개",
    source: "https://ko.daedong.co.kr/",
    need: "생성형 AI를 교육개발 프로세스에 적용하는 표준 방법과 성과를 수치로 증명할 수 있는 소규모 실증 모델이 필요한 상태",
    psychology: "HRD 경력이 짧아 빠르게 전문성을 확보하고 성과를 입증해야 한다는 부담과 실행 불확실성이 함께 있는 것으로 추론됨",
    expectation: "AI 기반 교수설계 템플릿, 콘텐츠 개발 실습, 시간·비용 절감 측정법, 교육효과 지표, 파일럿 과제 설계안",
    reason: "HRD 경력 8개월이며 교육기법 부족과 ROI 증명의 어려움을 동시에 장애물로 제시함",
    confidence: "중간~높음",
    date: "2026-07-22"
  },
  {
    id: 5,
    company: "DB생명보험",
    department: "인사팀",
    name: "강태우",
    position: "수석",
    experience: "7년6개월",
    role: "평가·교육",
    level: "개인활용",
    barrier: "교육기법/도입방법 정보 부족",
    topic: "실제 교육기획 및 운영 사례",
    question: "",
    email: "twkang@idblife.com",
    interest: "전체",
    industry: "생명보험업",
    business: "보장성보험을 중심으로 한 생명보험 상품 개발·판매, 방카슈랑스 등 판매채널 운영 및 안정적 자산운용",
    source: "https://www.idblife.com/company/info/bz_realm",
    need: "규제가 강한 보험업 환경에서도 실제로 작동하는 교육기획·운영 사례와 재사용 가능한 업무절차를 확보하려는 니즈",
    psychology: "경험이 많은 실무자로서 추상적 이론보다 검증된 실행 사례를 선호하며, 도입 효과와 현실 적용 가능성을 냉정하게 확인하려는 상태로 추론됨",
    expectation: "교육기획부터 운영·평가까지의 End-to-End 사례, 실무 템플릿, 금융권 보안 고려사항, 적용 전후 효과 데이터",
    reason: "HR 경력 7년6개월이며 구체적으로 실제 교육기획 및 운영 사례를 희망하고 있음",
    confidence: "중간~높음",
    date: "2026-07-22"
  },
  {
    id: 6,
    company: "부천도시공사",
    department: "경영지원부",
    name: "김효민",
    position: "주임",
    experience: "2년4개월",
    role: "교육",
    level: "개인활용",
    barrier: "학습자의 AI 거부감 및 기초역량 부족",
    topic: "AI 활용 수준 차이가 큰 교육생을 만족시키는 교육운영 방법",
    question: "",
    email: "hmiinn@naver.com",
    interest: "전체",
    industry: "지방공기업·도시개발 및 공공시설 운영",
    business: "도시개발·공공주택·도시정비 사업과 주차장·체육시설 등 공공시설의 관리·운영, 시민 서비스 제공",
    source: "https://www.best.or.kr/fmcs/192",
    need: "AI 숙련도와 수용성이 다른 학습자들을 동시에 포용할 수 있는 수준별 교육설계와 변화관리 방법이 핵심 니즈",
    psychology: "학습자 불만과 교육 실패 가능성을 우려하며 참여자의 감정과 만족도를 세심하게 관리하려는 책임감·부담이 큰 상태로 추론됨",
    expectation: "사전 진단도구, 초급·중급 분화 커리큘럼, 거부감 완화 메시지, 실습 난이도 조절법, 보충학습·코칭 운영안",
    reason: "장애물과 희망주제 모두 학습자의 거부감, 기초역량 차이, 만족도 문제에 집중되어 있음",
    confidence: "높음",
    date: "2026-07-22"
  },
  {
    id: 7,
    company: "삼표시멘트",
    department: "인사팀",
    name: "주용현",
    position: "책임",
    experience: "1년",
    role: "교육·평가",
    level: "개인활용",
    barrier: "사내 보안 규정 및 생성형AI 사용 제한",
    topic: "교육 진행·안내·평가 업무 적용",
    question: "회사에서 ChatGPT 사용이 어려운데 대체 가능한 보안형 AI는?",
    email: "younghyun.ju@sampyo.co.kr",
    interest: "모두",
    industry: "시멘트 제조업",
    business: "포틀랜드시멘트·고로슬래그시멘트 등 시멘트 생산·판매와 레미콘 사업, 폐기물 자원화 및 환경경영",
    source: "https://www.sampyocement.co.kr/kor/ir/ir02.html",
    need: "ChatGPT 사용 제한을 우회하는 것이 아니라 회사 보안정책을 준수하면서 교육 진행·안내·평가를 자동화할 수 있는 대안 확보가 핵심 니즈",
    psychology: "AI 활용 의지는 있으나 내부 규정 때문에 실행이 막혀 답답함을 느끼며, 동시에 보안 사고를 피하려는 제약 인식과 신중함이 큰 상태로 추론됨",
    expectation: "기업용·폐쇄형·온프레미스 AI 대안 비교, 민감정보 비식별화 방법, 허용 가능한 자동화 예시, 내부 승인용 보안 체크리스트",
    reason: "사내 사용 제한을 가장 큰 장애물로 제시했고 강사에게 보안형 대체 AI를 직접 질문함",
    confidence: "높음",
    date: "2026-07-22"
  }
];

let state = {
  data: [...initialData],
  filteredData: [...initialData],
  searchQuery: '',
  levelFilter: 'ALL',
  industryFilter: 'ALL'
};

let chartLevelInstance = null;
let chartBarrierInstance = null;

// Run immediately as soon as DOM is ready for zero latency
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  renderStats();
  populateFilters();
  renderCards();
  setupEventListeners();
  
  // Render charts instantly with zero animation delay
  renderCharts();
  
  // Asynchronous CSV check without blocking initial render
  setTimeout(tryFetchCSV, 100);
}

async function tryFetchCSV() {
  try {
    const response = await fetch('./HR_AI_교육참가자_니즈분석_20260722.csv');
    if (response.ok) {
      const text = await response.text();
      const parsed = parseCSV(text);
      if (parsed && parsed.length > 0) {
        state.data = parsed;
        applyFilters();
      }
    }
  } catch (e) {
    // Silent fallback
  }
}

function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  if (lines.length <= 1) return null;
  
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const row = parseCSVRow(lines[i]);
    if (row.length >= 22) {
      result.push({
        id: parseInt(row[0]) || i,
        company: row[1],
        department: row[2],
        name: row[3],
        position: row[4],
        experience: row[5],
        role: row[6],
        level: row[7],
        barrier: row[8],
        topic: row[9],
        question: row[10],
        email: row[11],
        interest: row[12],
        industry: row[13],
        business: row[14],
        source: row[15],
        need: row[16],
        psychology: row[17],
        expectation: row[18],
        reason: row[19],
        confidence: row[20],
        date: row[21]
      });
    }
  }
  return result;
}

function parseCSVRow(rowStr) {
  const row = [];
  let inQuotes = false;
  let currentVal = '';
  
  for (let i = 0; i < rowStr.length; i++) {
    const char = rowStr[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      row.push(currentVal.trim());
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  row.push(currentVal.trim());
  return row;
}

function renderStats() {
  const totalCount = state.data.length;
  const orgCount = state.data.filter(d => d.level === '조직도입').length;
  const indCount = state.data.filter(d => d.level === '개인활용').length;
  
  document.getElementById('stat-total').textContent = `${totalCount}명`;
  document.getElementById('stat-org').textContent = `${orgCount}개사`;
  document.getElementById('stat-ind').textContent = `${indCount}개사`;
}

function populateFilters() {
  const industrySelect = document.getElementById('filter-industry');
  const industries = [...new Set(state.data.map(d => d.industry))];
  
  industrySelect.innerHTML = '<option value="ALL">전체 업종</option>';
  industries.forEach(ind => {
    const opt = document.createElement('option');
    opt.value = ind;
    opt.textContent = ind;
    industrySelect.appendChild(opt);
  });
}

function setupEventListeners() {
  document.getElementById('search-input').addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    applyFilters();
  });

  document.getElementById('filter-level').addEventListener('change', (e) => {
    state.levelFilter = e.target.value;
    applyFilters();
  });

  document.getElementById('filter-industry').addEventListener('change', (e) => {
    state.industryFilter = e.target.value;
    applyFilters();
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    document.getElementById('filter-level').value = 'ALL';
    document.getElementById('filter-industry').value = 'ALL';
    state.searchQuery = '';
    state.levelFilter = 'ALL';
    state.industryFilter = 'ALL';
    applyFilters();
  });

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
}

function applyFilters() {
  state.filteredData = state.data.filter(item => {
    const matchesSearch = 
      item.company.toLowerCase().includes(state.searchQuery) ||
      item.name.toLowerCase().includes(state.searchQuery) ||
      item.department.toLowerCase().includes(state.searchQuery) ||
      item.need.toLowerCase().includes(state.searchQuery) ||
      item.topic.toLowerCase().includes(state.searchQuery);

    const matchesLevel = state.levelFilter === 'ALL' || item.level === state.levelFilter;
    const matchesIndustry = state.industryFilter === 'ALL' || item.industry === state.industryFilter;

    return matchesSearch && matchesLevel && matchesIndustry;
  });

  renderCards();
  renderCharts();
}

function renderCards() {
  const container = document.getElementById('cards-grid');
  const countBadge = document.getElementById('result-count');
  countBadge.textContent = `${state.filteredData.length}건 / 총 ${state.data.length}건`;

  if (state.filteredData.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>검색 결과가 없습니다</h3>
        <p>다른 검색어나 필터를 선택해 보세요.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.filteredData.map(item => {
    const isOrg = item.level === '조직도입';
    const levelBadgeClass = isOrg ? 'level-org' : 'level-individual';

    return `
      <div class="user-card" onclick="openModal(${item.id})">
        <div>
          <div class="card-top">
            <div class="company-info">
              <h3>${item.company} <span style="font-weight: 500; font-size: 13px; color: var(--text-muted);">${item.industry}</span></h3>
              <p>${item.department} · ${item.name} ${item.position} (경력 ${item.experience})</p>
            </div>
            <span class="level-badge ${levelBadgeClass}">${item.level}</span>
          </div>

          <div class="card-body">
            <div class="info-item">
              <div class="label">가장 큰 장애물</div>
              <div class="content">${item.barrier}</div>
            </div>

            <div class="info-item">
              <div class="label">학습 희망 주제</div>
              <div class="content">${item.topic}</div>
            </div>

            <div class="highlight-box">
              🎯 <strong>핵심 니즈:</strong> ${item.need}
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="confidence-tag">
            <span class="confidence-dot"></span>
            추론 확신도: ${item.confidence}
          </div>
          <div class="btn-detail">
            상세분석 보기 ➔
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderCharts() {
  if (typeof Chart === 'undefined') return;
  renderLevelChart();
  renderBarrierChart();
}

function renderLevelChart() {
  const ctx = document.getElementById('chart-level');
  if (!ctx) return;

  const orgCount = state.filteredData.filter(d => d.level === '조직도입').length;
  const indCount = state.filteredData.filter(d => d.level === '개인활용').length;

  if (chartLevelInstance) chartLevelInstance.destroy();

  chartLevelInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['개인활용', '조직도입'],
      datasets: [{
        data: [indCount, orgCount],
        backgroundColor: ['#3b82f6', '#2d8b49'],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false, // Instant zero-latency rendering
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { family: 'Pretendard', size: 12 } }
        }
      }
    }
  });
}

function renderBarrierChart() {
  const ctx = document.getElementById('chart-barrier');
  if (!ctx) return;

  const barrierCounts = {};
  state.filteredData.forEach(d => {
    let key = '기타/복합';
    if (d.barrier.includes('보안') || d.barrier.includes('유출')) key = '사내 보안/정보유출 우려';
    else if (d.barrier.includes('기초역량') || d.barrier.includes('역량 부족')) key = 'AI 기초역량 부족';
    else if (d.barrier.includes('기법') || d.barrier.includes('도입방법')) key = '교육기법/도입방법 부족';
    else if (d.barrier.includes('거부감')) key = '학습자 거부감';

    barrierCounts[key] = (barrierCounts[key] || 0) + 1;
  });

  const labels = Object.keys(barrierCounts);
  const data = Object.values(barrierCounts);

  if (chartBarrierInstance) chartBarrierInstance.destroy();

  chartBarrierInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '인원 수',
        data: data,
        backgroundColor: '#e66a2c',
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: false, // Instant zero-latency rendering
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          ticks: { stepSize: 1, precision: 0 }
        }
      }
    }
  });
}

function openModal(id) {
  const item = state.data.find(d => d.id === id);
  if (!item) return;

  const modalContent = document.getElementById('modal-body');
  modalContent.innerHTML = `
    <div class="modal-header">
      <h2>${item.company} — ${item.name} ${item.position}</h2>
      <p>${item.department} | 담당업무: ${item.role} | HR경력: ${item.experience}</p>
    </div>

    <div class="modal-grid">
      <div class="modal-section">
        <div class="modal-section-title">💡 핵심 니즈 추론</div>
        <div class="modal-section-body">${item.need}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">🧠 실무자 심리 상태 추론</div>
        <div class="modal-section-body">${item.psychology}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">🎁 교육을 통해 얻고 싶은 것 (추정)</div>
        <div class="modal-section-body">${item.expectation}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">🚨 주요 장애물 & 희망 주제</div>
        <div class="modal-section-body">
          <p style="margin-bottom: 6px;"><strong>[AI 활용 수준]</strong> ${item.level}</p>
          <p style="margin-bottom: 6px;"><strong>[장애요인]</strong> ${item.barrier}</p>
          <p style="margin-bottom: 6px;"><strong>[학습희망]</strong> ${item.topic}</p>
          ${item.question ? `<p style="margin-top: 8px; color: #e66a2c;"><strong>[강사 질의사항]</strong> ${item.question}</p>` : ''}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">🏢 기업 및 사업 정보</div>
        <div class="modal-section-body">
          <p style="margin-bottom: 4px;"><strong>업종:</strong> ${item.industry}</p>
          <p style="margin-bottom: 6px;"><strong>주요사업:</strong> ${item.business}</p>
          ${item.source ? `<a href="${item.source}" target="_blank" style="color: var(--db-green); text-decoration: underline; font-size: 13px;">🔗 회사 웹사이트 바로가기</a>` : ''}
        </div>
      </div>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = 'auto';
}
