# 📊 InvestAtlas India

**Understand every investment option in India before investing your first rupee.**

A comprehensive educational platform that helps Indian investors discover, compare, and learn about investment options with neutral, source-backed information.

---

## ✨ Features

### 📚 Investment Education
- **33+ Investment Products** across 9 major categories
- **40+ Financial Glossary Terms** with simple definitions
- **12 Beginner Learning Articles** covering core investment concepts
- **Real-world Examples** showing how investments work in practice

### 🔍 Investment Discovery
- **Search Across All Products** - Find investments by name, category, or key features
- **Category Browsing** - Explore by type (Govt, Bank, Market, etc.)
- **Detailed Product Profiles** - Complete breakdown of each investment option

### ⚖️ Smart Comparison
- **Compare Up to 4 Investments** side-by-side
- **11 Key Criteria** for comprehensive evaluation:
  - Returns type & risk level
  - Minimum investment amounts
  - Liquidity & lock-in periods
  - Tax implications
  - Regulation & administration
  - And more...

### 📈 Advanced Tools
- **Compounding Calculator** - Project your investment growth
- **Inflation Calculator** - Understand real returns
- **Horizon Calculator** - Determine optimal investment duration

---

## 🏗️ Investment Categories

| Category | Investments | Description |
|----------|-------------|-------------|
| **Government Savings** | 5 | PPF, NSC, KVP, SSY, SCSS |
| **Bank Deposits** | 2 | Fixed Deposit, Recurring Deposit |
| **Market-Linked Funds** | 4 | Mutual Funds, ETFs, Index Funds |
| **Direct Equity** | 2 | Stocks, IPOs |
| **Government Securities** | 2 | G-Secs, Treasury Bills |
| **Bonds & Debt** | 2 | Corporate Bonds, SDLs |
| **Gold Investments** | 3 | Physical Gold, Gold ETF, SGB |
| **Retirement Plans** | 2 | NPS, EPF/VPF |
| **Alternative Assets** | 4 | REITs, InvITs, PMS, AIF |

---

## 🎯 Target Audience

### For Complete Beginners
- Understand basic investment concepts
- Learn risk vs. return trade-offs
- Discover what options are available

### For Savers with Goals
- Compare returns across options
- Understand liquidity needs
- Evaluate tax implications

### For Young Professionals
- Build diversified portfolio
- Plan long-term wealth creation
- Navigate complex products like Mutual Funds and NPS

### For Existing Savers
- Expand beyond PPF/FD
- Explore market-linked investments
- Optimize tax efficiency

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **State** | React Context API |
| **Data** | TypeScript-based seed data |

### Design Principles
- **Apple Design** - Glassmorphism, fluid animations, dark mode
- **High Contrast** - WCAG AAA compliant text readability
- **Responsive** - Mobile-first design
- **Accessible** - Semantic HTML, keyboard navigation

---

## 📁 Project Structure

```
investatlas-india/
├── app/
│   ├── api/                    # REST API routes
│   │   ├── investments/route.ts
│   │   ├── categories/route.ts
│   │   ├── search/route.ts
│   │   ├── compare/route.ts
│   │   ├── glossary/route.ts
│   │   ├── ai-assistant/route.ts
│   │   └── admin/route.ts
│   ├── pages/
│   │   ├── page.tsx            # Home
│   │   ├── explore/page.tsx    # Investment discovery
│   │   ├── categories/page.tsx # All categories
│   │   ├── category/[slug]/    # Category details
│   │   ├── investment/[slug]/  # Investment profile
│   │   ├── compare/page.tsx    # Side-by-side comparison
│   │   ├── glossary/page.tsx   # Glossary terms
│   │   ├── learn/page.tsx      # Learning articles
│   │   └── calculators/        # Calculation tools
│   └── layout.tsx              # Root layout with providers
├── components/
│   ├── ui/                     # Base UI components
│   ├── layout/                 # Header, Footer, Navigation
│   ├── home/                   # Landing page sections
│   ├── investment/             # Investment detail UI
│   ├── explore/                # Investment grid & filters
│   ├── comparison/             # Comparison matrix
│   ├── glossary/               # Glossary UI
│   ├── learn/                  # Learning content
│   ├── calculators/            # Financial calculators
│   └── admin/                  # Admin tools
├── lib/
│   ├── data/                   # Seed data (investments, glossary, articles)
│   ├── services/               # Business logic layer
│   │   ├── investmentService.ts
│   │   ├── searchService.ts
│   │   ├── comparisonService.ts
│   │   ├── aiAssistantService.ts
│   │   └── auditService.ts
│   ├── types/                  # TypeScript definitions
│   └── utils/                  # Helper functions
└── public/                     # Static assets
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/puneethsai08-ash/InvestAtlas.git
cd InvestAtlas

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 API Documentation

### Investments API
```http
GET /api/investments?category=cat-govt-savings
```

Returns: All investment products with optional category filter

### Categories API
```http
GET /api/categories
```

Returns: All investment categories with metadata

### Search API
```http
POST /api/search
Content-Type: application/json

{
  "query": "ppf",
  "type": "investment"
}
```

Returns: Search results across investments, glossary, and articles

### Compare API
```http
POST /api/compare
Content-Type: application/json

{
  "slugs": ["public-provident-fund", "fixed-deposit"]
}
```

Returns: Normalized comparison matrix

---

## 📊 Data Policy

### Source-First Approach
Every data point is attributed to an authoritative source:

| Source | Description | URL |
|--------|-------------|-----|
| Ministry of Finance | Government schemes, tax rules | `mof.gov.in` |
| Reserve Bank of India | Banking regulations | `rbi.org.in` |
| SEBI | Mutual funds, securities | `sebi.gov.in` |
| EPFO | Employee Provident Fund | `epfindia.gov.in` |
| National Savings Institute | Post office schemes | `indiapost.gov.in` |

### Data Fields
- `status`: `draft` or `published`
- `lastVerifiedAt`: When data was last checked
- `completenessScore`: 0-100% coverage
- `sourceIds`: References to authoritative sources

---

## 🎨 Design System

### Color Palette (High Contrast)

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Primary | `#2563eb` (Blue-600) | `#60a5fa` (Blue-500) |
| Background | `#ffffff` | `#0f172a` |
| Text | `#1a1a2e` | `#f8fafc` |
| Muted Text | `#334155` | `#cbd5e1` |
| Border | `#e2e8f0` | `#334155` |

### Typography
- **Headings**: System font with optical sizing
- **Body**: Inter / Roboto / Arial (fallback chain)
- **Monospace**: JetBrains Mono / Courier (for code)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines
- Follow TypeScript best practices
- Maintain consistent code style
- Add/更新文档 for new features
- Ensure all tests pass

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with Next.js, Tailwind CSS, and Framer Motion
- Design inspired by Apple's human interface guidelines
- Data sourced from official government and regulatory websites
- Community contributions and feedback welcome

---

## 📞 Support

For questions, issues, or feature requests:
- Open an issue on GitHub
- Email: support@investatlas.in (placeholder)
- Twitter: [@InvestAtlasIndia](https://twitter.com/InvestAtlasIndia) (placeholder)

---

## 🏆 Roadmap

### Phase 1: Core Platform ✅
- [x] Investment discovery & search
- [x] Detailed investment profiles
- [x] Comparison tool
- [x] Glossary & learning center
- [x] Basic calculators

### Phase 2: Enhanced Experience 🚧
- [ ] Personalized investment recommendations
- [ ] Portfolio tracker (educational only)
- [ ] Tax planning assistant
- [ ] Email newsletter for market updates
- [ ] Community forum

### Phase 3: Advanced Features 📅
- [ ] Integration with investment platforms
- [ ] API for third-party developers
- [ ] Mobile app (iOS & Android)
- [ ] Advanced charting & analytics
- [ ] Multi-language support

---

<div align="center">

**Built with ❤️ for Indian investors**

*Last updated: September 2026*

</div>