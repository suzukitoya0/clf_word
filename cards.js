// AWS CLF-C02 暗記カード データファイル
// ここに書いたカードがそのまま index.html の単語帳に反映されます。
// 1枚 = 1つの { ... } ブロック。カンマ区切りで増減できます。
//
// 各項目の意味:
//   page    : 元PDFのページ番号（表示用の参考情報。適当な数字でもOK）
//   term    : カードの表面（サービス名・用語）
//   answer  : カードの裏面（説明）
//   section : 章フィルターに使われる分類名
//   tip     : 「覚え方・Tips」欄の内容（似ているサービスとの違いなど）

const allCards = [
  {
    page: 1,
    term: "クラウドコンピューティング",
    answer: "サーバーやストレージなどのITリソースを、自社で所有せずインターネット経由でオンデマンドに利用する仕組み。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "覚え方: 管理する範囲が狭い順：SaaS（使うだけ）→PaaS（コードだけ管理）→IaaS（OS以上を管理）→オンプレミス（全部自分で管理）"
  },
  {
    page: 1,
    term: "IaaS（Infrastructure as a Service）",
    answer: "サーバー・ストレージ・ネットワークなど「インフラ」を提供。OS以上は利用者が管理する（例：EC2）。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "覚え方: 管理する範囲が狭い順：SaaS（使うだけ）→PaaS（コードだけ管理）→IaaS（OS以上を管理）→オンプレミス（全部自分で管理）"
  },
  {
    page: 1,
    term: "PaaS（Platform as a Service）",
    answer: "OSやミドルウェアまで提供され、利用者はアプリのコードだけに集中できる（例：Elastic Beanstalk）。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "覚え方: 管理する範囲が狭い順：SaaS（使うだけ）→PaaS（コードだけ管理）→IaaS（OS以上を管理）→オンプレミス（全部自分で管理）"
  },
  {
    page: 1,
    term: "SaaS（Software as a Service）",
    answer: "完成したソフトウェアそのものを提供。利用者はインフラもコードも意識せず使うだけ（例：Gmail、Amazon Chime）。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "覚え方: 管理する範囲が狭い順：SaaS（使うだけ）→PaaS（コードだけ管理）→IaaS（OS以上を管理）→オンプレミス（全部自分で管理）"
  },
  {
    page: 1,
    term: "パブリッククラウド",
    answer: "AWSのように、不特定多数の顧客が共有するクラウド環境。初期費用を抑えやすい。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "プライベートクラウド",
    answer: "自社専用に構築されたクラウド環境（オンプレミス含む）。セキュリティ要件が厳しい場合に選ばれる。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "ハイブリッドクラウド",
    answer: "オンプレミス（プライベート）とパブリッククラウドを組み合わせて運用する形態。AWS Outposts等が該当。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "固定費が変動費に変わる",
    answer: "データセンター等への先行投資が不要になり、使った分だけの支払いになる。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "スケールメリットによる大きなコスト削減",
    answer: "多数の顧客の利用を集約することで、AWSはより低いコストを実現し利用者に還元する。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "キャパシティ予測が不要になる",
    answer: "将来の需要を予測して機材を用意する必要がなくなり、必要な時に必要なだけ調達できる。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "速度と俊敏性の向上",
    answer: "新しいITリソースを数分で調達でき、開発・実験のスピードが上がる。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "データセンターの運用・保守への支出が不要",
    answer: "ラックの設置や配線などの「重い作業」をAWSに任せ、本来のビジネスに集中できる。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "わずか数分で世界中にデプロイ",
    answer: "世界中のリージョンを使い、低レイテンシで多拠点にアプリケーションを展開できる。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: ""
  },
  {
    page: 1,
    term: "スケーラビリティ（拡張性）",
    answer: "需要の増加に応じて、システムの処理能力を大きくしていける性質（長期的な成長への対応）。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "違い: スケーラビリティ＝大きくなっていく力（成長への対応）／イラスティシティ＝伸び縮みする力（増減への自動対応）"
  },
  {
    page: 1,
    term: "イラスティシティ（弾力性）",
    answer: "需要の増減に応じて、リソースを自動的に増減させる性質（Auto Scalingが代表例、短期的な変動への対応）。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "違い: スケーラビリティ＝大きくなっていく力（成長への対応）／イラスティシティ＝伸び縮みする力（増減への自動対応）"
  },
  {
    page: 1,
    term: "高可用性（High Availability）",
    answer: "複数のAZなどにシステムを分散し、障害が起きてもサービスを継続提供できるようにする設計思想。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "違い: スケーラビリティ＝大きくなっていく力（成長への対応）／イラスティシティ＝伸び縮みする力（増減への自動対応）"
  },
  {
    page: 1,
    term: "耐障害性（Fault Tolerance）",
    answer: "一部のコンポーネントが故障しても、性能を落とさず動き続けられる能力（高可用性よりさらに一段階上）。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "違い: スケーラビリティ＝大きくなっていく力（成長への対応）／イラスティシティ＝伸び縮みする力（増減への自動対応）"
  },
  {
    page: 1,
    term: "RTO（目標復旧時間）",
    answer: "障害発生からシステムを復旧させるまでに許容できる「時間」の目標値。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "違い: スケーラビリティ＝大きくなっていく力（成長への対応）／イラスティシティ＝伸び縮みする力（増減への自動対応）"
  },
  {
    page: 1,
    term: "RPO（目標復旧時点）",
    answer: "障害発生時に、どの時点のデータまで復旧できればよいかを示す「データ損失許容量」の目標値。",
    section: "1. クラウドコンピューティングの基礎知識",
    tip: "違い: スケーラビリティ＝大きくなっていく力（成長への対応）／イラスティシティ＝伸び縮みする力（増減への自動対応）"
  },
  {
    page: 2,
    term: "インスタンス",
    answer: "AMIをもとに起動される、実際に稼働する仮想サーバーの実体（EC2の「1台」を指す単位）。",
    section: "2. コンピューティング関連",
    tip: "覚え方: AMI＝設計図（テンプレート）／インスタンス＝設計図から作られた「実物」のサーバー／インスタンスファミリー＝どんな用途に向いているかの「車種」区分（普通車・トラック・スポーツカーのようなイメージ）"
  },
  {
    page: 2,
    term: "Amazon Machine Image (AMI)",
    answer: "OS・設定・アプリ等を含む、EC2インスタンスを起動するための「テンプレート（ひな形）」。同じAMIから何台でも同じ構成のインスタンスを作れる。",
    section: "2. コンピューティング関連",
    tip: "覚え方: AMI＝設計図（テンプレート）／インスタンス＝設計図から作られた「実物」のサーバー／インスタンスファミリー＝どんな用途に向いているかの「車種」区分（普通車・トラック・スポーツカーのようなイメージ）"
  },
  {
    page: 2,
    term: "インスタンスファミリー",
    answer: "EC2インスタンスタイプの分類。用途に応じて「汎用（M系）」「コンピューティング最適化（C系）」「メモリ最適化（R系）」「ストレージ最適化（I/D系）」「高速コンピューティング（P/G系、GPU等）」に分かれる。",
    section: "2. コンピューティング関連",
    tip: "覚え方: AMI＝設計図（テンプレート）／インスタンス＝設計図から作られた「実物」のサーバー／インスタンスファミリー＝どんな用途に向いているかの「車種」区分（普通車・トラック・スポーツカーのようなイメージ）"
  },
  {
    page: 2,
    term: "Amazon EC2",
    answer: "仮想サーバーをオンデマンドで起動できるIaaS。OS以上を自由に管理できる最も基本的なコンピューティングサービス。",
    section: "2. コンピューティング関連",
    tip: "違い: EC2＝自由度が高い仮想サーバー（自分で管理）／Elastic Beanstalk＝EC2等をまとめて自動構築（半自動）／Lightsail＝定額・簡単設定のVPS（初心者・小規模向け）／Lambda＝サーバーの存在を意識しないサーバーレス"
  },
  {
    page: 2,
    term: "AWS Lambda",
    answer: "サーバー管理不要でコードを実行できるサーバーレスコンピューティング。イベント駆動でリクエスト時のみ課金。",
    section: "2. コンピューティング関連",
    tip: "違い: EC2＝自由度が高い仮想サーバー（自分で管理）／Elastic Beanstalk＝EC2等をまとめて自動構築（半自動）／Lightsail＝定額・簡単設定のVPS（初心者・小規模向け）／Lambda＝サーバーの存在を意識しないサーバーレス"
  },
  {
    page: 2,
    term: "AWS Elastic Beanstalk",
    answer: "コードをアップロードするだけで、EC2・ELB・Auto Scalingなどの環境構築を自動化するPaaS的サービス。",
    section: "2. コンピューティング関連",
    tip: "違い: EC2＝自由度が高い仮想サーバー（自分で管理）／Elastic Beanstalk＝EC2等をまとめて自動構築（半自動）／Lightsail＝定額・簡単設定のVPS（初心者・小規模向け）／Lambda＝サーバーの存在を意識しないサーバーレス"
  },
  {
    page: 2,
    term: "Amazon Lightsail",
    answer: "仮想サーバー・ストレージ・DNSなどが定額パッケージになった、シンプルなVPS型サービス。小規模サイト向け。",
    section: "2. コンピューティング関連",
    tip: "違い: EC2＝自由度が高い仮想サーバー（自分で管理）／Elastic Beanstalk＝EC2等をまとめて自動構築（半自動）／Lightsail＝定額・簡単設定のVPS（初心者・小規模向け）／Lambda＝サーバーの存在を意識しないサーバーレス"
  },
  {
    page: 2,
    term: "AWS Batch",
    answer: "大量のバッチ計算ジョブを、必要なコンピューティングリソースを自動調達して実行するサービス。",
    section: "2. コンピューティング関連",
    tip: "違い: EC2＝自由度が高い仮想サーバー（自分で管理）／Elastic Beanstalk＝EC2等をまとめて自動構築（半自動）／Lightsail＝定額・簡単設定のVPS（初心者・小規模向け）／Lambda＝サーバーの存在を意識しないサーバーレス"
  },
  {
    page: 2,
    term: "AWS Outposts",
    answer: "AWSのインフラ・サービスをオンプレミス環境に設置できるハードウェア。データを自社内に置く必要がある場合に使う。",
    section: "2. コンピューティング関連",
    tip: "違い: EC2＝自由度が高い仮想サーバー（自分で管理）／Elastic Beanstalk＝EC2等をまとめて自動構築（半自動）／Lightsail＝定額・簡単設定のVPS（初心者・小規模向け）／Lambda＝サーバーの存在を意識しないサーバーレス"
  },
  {
    page: 2,
    term: "Amazon ECS",
    answer: "AWS独自のコンテナオーケストレーションサービス（Amazon Elastic Container Service）。Dockerコンテナの実行・管理を行う。",
    section: "2. コンピューティング関連",
    tip: "違い: ECS＝AWS独自方式のコンテナ管理／EKS＝Kubernetes方式のコンテナ管理／Fargate＝ECS・EKSを「サーバーレスで」動かすための実行エンジン（EC2起動タイプの代替）／ECR＝コンテナの置き場所"
  },
  {
    page: 2,
    term: "Amazon EKS",
    answer: "Kubernetes（K8s）互換のマネージドコンテナオーケストレーションサービス。",
    section: "2. コンピューティング関連",
    tip: "違い: ECS＝AWS独自方式のコンテナ管理／EKS＝Kubernetes方式のコンテナ管理／Fargate＝ECS・EKSを「サーバーレスで」動かすための実行エンジン（EC2起動タイプの代替）／ECR＝コンテナの置き場所"
  },
  {
    page: 2,
    term: "AWS Fargate",
    answer: "ECSやEKSの実行基盤となる、サーバーレスのコンテナ実行エンジン。EC2インスタンスの管理が不要になる。",
    section: "2. コンピューティング関連",
    tip: "違い: ECS＝AWS独自方式のコンテナ管理／EKS＝Kubernetes方式のコンテナ管理／Fargate＝ECS・EKSを「サーバーレスで」動かすための実行エンジン（EC2起動タイプの代替）／ECR＝コンテナの置き場所"
  },
  {
    page: 2,
    term: "Amazon ECR",
    answer: "Dockerコンテナイメージを保存・管理するプライベートリポジトリ。",
    section: "2. コンピューティング関連",
    tip: "違い: ECS＝AWS独自方式のコンテナ管理／EKS＝Kubernetes方式のコンテナ管理／Fargate＝ECS・EKSを「サーバーレスで」動かすための実行エンジン（EC2起動タイプの代替）／ECR＝コンテナの置き場所"
  },
  {
    page: 2,
    term: "EC2 Auto Scaling",
    answer: "需要の増減に応じて、EC2インスタンスの数を自動的に増減させるサービス。最小・最大・希望のインスタンス数を設定して使う。",
    section: "2. コンピューティング関連",
    tip: "補足: ELB（5章）と組み合わせて「負荷分散＋自動スケーリング」がAWSの定番構成。Auto Scaling＝台数の増減、ELB＝トラフィックの振り分け、と役割が違う。"
  },
  {
    page: 3,
    term: "Amazon S3",
    answer: "インターネット経由でアクセスするオブジェクトストレージ。容量無制限で耐久性が高い。写真・動画・バックアップ等に利用。",
    section: "3. ストレージ関連",
    tip: "違い: S3＝オブジェクト（ファイル単位、Web経由）／EBS＝ブロック（1台のEC2専用のディスク）／EFS＝ファイル（複数EC2で共有、NFS）→ 3つは保存形式で区別する"
  },
  {
    page: 3,
    term: "Amazon EBS",
    answer: "EC2にアタッチするブロックストレージ（仮想ハードディスク）。1つのEC2インスタンスに直結して使う。",
    section: "3. ストレージ関連",
    tip: "違い: S3＝オブジェクト（ファイル単位、Web経由）／EBS＝ブロック（1台のEC2専用のディスク）／EFS＝ファイル（複数EC2で共有、NFS）→ 3つは保存形式で区別する"
  },
  {
    page: 3,
    term: "Amazon EFS",
    answer: "複数のEC2から同時にマウントできるマネージドのネットワークファイルシステム（NFS）。",
    section: "3. ストレージ関連",
    tip: "違い: S3＝オブジェクト（ファイル単位、Web経由）／EBS＝ブロック（1台のEC2専用のディスク）／EFS＝ファイル（複数EC2で共有、NFS）→ 3つは保存形式で区別する"
  },
  {
    page: 3,
    term: "Amazon FSx",
    answer: "Windows File Server や Lustre など、特定用途に最適化されたマネージドファイルストレージ。",
    section: "3. ストレージ関連",
    tip: "違い: S3＝オブジェクト（ファイル単位、Web経由）／EBS＝ブロック（1台のEC2専用のディスク）／EFS＝ファイル（複数EC2で共有、NFS）→ 3つは保存形式で区別する"
  },
  {
    page: 3,
    term: "AWS Storage Gateway",
    answer: "オンプレミス環境とS3などのAWSストレージをシームレスに接続するハイブリッドストレージサービス。",
    section: "3. ストレージ関連",
    tip: "違い: S3＝オブジェクト（ファイル単位、Web経由）／EBS＝ブロック（1台のEC2専用のディスク）／EFS＝ファイル（複数EC2で共有、NFS）→ 3つは保存形式で区別する"
  },
  {
    page: 3,
    term: "S3 Standard",
    answer: "高頻度アクセス向けの標準クラス。可用性・耐久性が高く、汎用的な用途に使う。",
    section: "3. ストレージ関連",
    tip: "覚え方: アクセス頻度が高い→安い順：Standard→Intelligent-Tiering→Standard-IA→One Zone-IA→Glacier Instant Retrieval→Glacier Flexible Retrieval→Glacier Deep Archive（右に行くほど保存費は安く、取り出しは遅い・高い）"
  },
  {
    page: 3,
    term: "S3 Intelligent-Tiering",
    answer: "アクセス頻度を自動で監視し、最適なコストのクラスへ自動的にデータを移動する。アクセスパターンが読めない場合に最適。",
    section: "3. ストレージ関連",
    tip: "覚え方: アクセス頻度が高い→安い順：Standard→Intelligent-Tiering→Standard-IA→One Zone-IA→Glacier Instant Retrieval→Glacier Flexible Retrieval→Glacier Deep Archive（右に行くほど保存費は安く、取り出しは遅い・高い）"
  },
  {
    page: 3,
    term: "S3 Standard-IA",
    answer: "低頻度アクセス向け。取り出しは高速だが、Standardより保存コストが安く取り出し費用がかかる（最低保存期間30日）。",
    section: "3. ストレージ関連",
    tip: "覚え方: アクセス頻度が高い→安い順：Standard→Intelligent-Tiering→Standard-IA→One Zone-IA→Glacier Instant Retrieval→Glacier Flexible Retrieval→Glacier Deep Archive（右に行くほど保存費は安く、取り出しは遅い・高い）"
  },
  {
    page: 3,
    term: "S3 One Zone-IA",
    answer: "単一のアベイラビリティーゾーン（AZ）にのみ保存する低頻度アクセス向けクラス。Standard-IAよりさらに安価だが可用性は低い。",
    section: "3. ストレージ関連",
    tip: "覚え方: アクセス頻度が高い→安い順：Standard→Intelligent-Tiering→Standard-IA→One Zone-IA→Glacier Instant Retrieval→Glacier Flexible Retrieval→Glacier Deep Archive（右に行くほど保存費は安く、取り出しは遅い・高い）"
  },
  {
    page: 3,
    term: "S3 Glacier Instant Retrieval",
    answer: "アーカイブ用途向けだが、取り出しはミリ秒単位で即時に可能な低コストクラス。",
    section: "3. ストレージ関連",
    tip: "覚え方: アクセス頻度が高い→安い順：Standard→Intelligent-Tiering→Standard-IA→One Zone-IA→Glacier Instant Retrieval→Glacier Flexible Retrieval→Glacier Deep Archive（右に行くほど保存費は安く、取り出しは遅い・高い）"
  },
  {
    page: 3,
    term: "S3 Glacier Flexible Retrieval",
    answer: "数分〜数時間で取り出し可能なアーカイブクラス（旧S3 Glacier）。年数回程度のアクセス向け。",
    section: "3. ストレージ関連",
    tip: "覚え方: アクセス頻度が高い→安い順：Standard→Intelligent-Tiering→Standard-IA→One Zone-IA→Glacier Instant Retrieval→Glacier Flexible Retrieval→Glacier Deep Archive（右に行くほど保存費は安く、取り出しは遅い・高い）"
  },
  {
    page: 3,
    term: "S3 Glacier Deep Archive",
    answer: "S3の中で最も低コストなクラス。取り出しには12時間以上かかる。長期保管・法定保存用途向け。",
    section: "3. ストレージ関連",
    tip: "覚え方: アクセス頻度が高い→安い順：Standard→Intelligent-Tiering→Standard-IA→One Zone-IA→Glacier Instant Retrieval→Glacier Flexible Retrieval→Glacier Deep Archive（右に行くほど保存費は安く、取り出しは遅い・高い）"
  },
  {
    page: 3,
    term: "AWS Snowcone",
    answer: "最も小型のエッジデバイス。数TB程度の少量データの移行や、現地でのデータ収集に使う。",
    section: "3. ストレージ関連",
    tip: "違い: Snow系＝物理輸送（ネットワークが細い・オフラインの大容量データ向け）／DataSync＝ネットワーク経由の自動同期／Transfer Family＝既存のFTP／SFTPシステムからの移行"
  },
  {
    page: 3,
    term: "AWS Snowball",
    answer: "数十TB単位の大量データをオフラインで物理輸送して移行する専用ストレージデバイス。",
    section: "3. ストレージ関連",
    tip: "違い: Snow系＝物理輸送（ネットワークが細い・オフラインの大容量データ向け）／DataSync＝ネットワーク経由の自動同期／Transfer Family＝既存のFTP／SFTPシステムからの移行"
  },
  {
    page: 3,
    term: "AWS Snowmobile",
    answer: "コンテナトラックで運ぶ超大容量（エクサバイト級）のデータ移行サービス。",
    section: "3. ストレージ関連",
    tip: "違い: Snow系＝物理輸送（ネットワークが細い・オフラインの大容量データ向け）／DataSync＝ネットワーク経由の自動同期／Transfer Family＝既存のFTP／SFTPシステムからの移行"
  },
  {
    page: 3,
    term: "AWS DataSync",
    answer: "オンプレミスとAWSストレージ間で、ネットワーク経由でデータを自動的に同期・転送するサービス。",
    section: "3. ストレージ関連",
    tip: "違い: Snow系＝物理輸送（ネットワークが細い・オフラインの大容量データ向け）／DataSync＝ネットワーク経由の自動同期／Transfer Family＝既存のFTP／SFTPシステムからの移行"
  },
  {
    page: 3,
    term: "AWS Transfer Family",
    answer: "FTP／SFTP／FTPSプロトコルを使ってS3やEFSにファイル転送するためのマネージドサービス。",
    section: "3. ストレージ関連",
    tip: "違い: Snow系＝物理輸送（ネットワークが細い・オフラインの大容量データ向け）／DataSync＝ネットワーク経由の自動同期／Transfer Family＝既存のFTP／SFTPシステムからの移行"
  },
  {
    page: 3,
    term: "NFSプロトコル",
    answer: "Linux／Unix系でよく使われるファイル共有プロトコル。Amazon EFSはこのNFSでファイルを共有する。",
    section: "3. ストレージ関連",
    tip: "違い: EFS＝Linux向け・NFSプロトコル／FSx for Windows File Server＝Windows向け・SMBプロトコル（同じ「複数サーバーで共有するファイルストレージ」でも、対応OS・プロトコルで使い分ける）"
  },
  {
    page: 3,
    term: "SMBプロトコル",
    answer: "Windows環境でよく使われるファイル共有プロトコル。Amazon FSx for Windows File ServerはこのSMBに対応する。",
    section: "3. ストレージ関連",
    tip: "違い: EFS＝Linux向け・NFSプロトコル／FSx for Windows File Server＝Windows向け・SMBプロトコル（同じ「複数サーバーで共有するファイルストレージ」でも、対応OS・プロトコルで使い分ける）"
  },
  {
    page: 3,
    term: "Amazon FSx for Windows File Server",
    answer: "Windows Serverの機能（Active Directory連携、SMBアクセス）をそのまま使えるマネージドファイルストレージ。",
    section: "3. ストレージ関連",
    tip: "違い: EFS＝Linux向け・NFSプロトコル／FSx for Windows File Server＝Windows向け・SMBプロトコル（同じ「複数サーバーで共有するファイルストレージ」でも、対応OS・プロトコルで使い分ける）"
  },
  {
    page: 3,
    term: "バージョニング",
    answer: "S3バケット内のオブジェクトを上書き・削除しても、過去のバージョンを残しておける機能。誤削除からの復旧に有効。",
    section: "3. ストレージ関連",
    tip: "覚え方: バージョニング＝「過去に戻せる」／ライフサイクル設定＝「自動で安く・自動で消す」／ブロックパブリックアクセス＝「誤公開を防ぐ安全装置」"
  },
  {
    page: 3,
    term: "ライフサイクル設定",
    answer: "オブジェクトの経過日数に応じて、自動的に安価なストレージクラスへ移行したり、削除したりするルールを設定する機能。",
    section: "3. ストレージ関連",
    tip: "覚え方: バージョニング＝「過去に戻せる」／ライフサイクル設定＝「自動で安く・自動で消す」／ブロックパブリックアクセス＝「誤公開を防ぐ安全装置」"
  },
  {
    page: 3,
    term: "ブロックパブリックアクセス",
    answer: "バケットやオブジェクトが誤って公開設定にされても、パブリックアクセスを強制的にブロックするセキュリティ機能。",
    section: "3. ストレージ関連",
    tip: "覚え方: バージョニング＝「過去に戻せる」／ライフサイクル設定＝「自動で安く・自動で消す」／ブロックパブリックアクセス＝「誤公開を防ぐ安全装置」"
  },
  {
    page: 3,
    term: "AWS Backup",
    answer: "EBS・RDS・DynamoDB・EFSなど複数のAWSサービスのバックアップを一元的に管理・自動化するサービス。",
    section: "3. ストレージ関連",
    tip: "違い: AWS Backup＝各種データの「バックアップ運用」を手動・スケジュールで一元管理／PITR＝秒単位で自動的に継続バックアップされ「任意の時点」に戻せる機能（DB個別に有効化）／CloudHSM＝暗号鍵を専用ハードウェアで管理する「鍵管理の最上位オプション」"
  },
  {
    page: 3,
    term: "ポイントインタイムリカバリ (PITR)",
    answer: "DynamoDBやRDS等で、過去35日以内の任意の時点の状態にデータベースを復元できる継続的バックアップ機能。",
    section: "3. ストレージ関連",
    tip: "違い: AWS Backup＝各種データの「バックアップ運用」を手動・スケジュールで一元管理／PITR＝秒単位で自動的に継続バックアップされ「任意の時点」に戻せる機能（DB個別に有効化）／CloudHSM＝暗号鍵を専用ハードウェアで管理する「鍵管理の最上位オプション」"
  },
  {
    page: 3,
    term: "AWS CloudHSM",
    answer: "専用の物理ハードウェア（HSM）上で暗号鍵を管理する、シングルテナントの暗号化サービス。KMSより厳格な鍵管理要件（規制対応等）がある場合に使う。",
    section: "3. ストレージ関連",
    tip: "違い: AWS Backup＝各種データの「バックアップ運用」を手動・スケジュールで一元管理／PITR＝秒単位で自動的に継続バックアップされ「任意の時点」に戻せる機能（DB個別に有効化）／CloudHSM＝暗号鍵を専用ハードウェアで管理する「鍵管理の最上位オプション」"
  },
  {
    page: 5,
    term: "Amazon RDS",
    answer: "MySQL・PostgreSQL・Oracle等、複数エンジンに対応したマネージドリレーショナルデータベース。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon Aurora",
    answer: "MySQL／PostgreSQL互換で、RDSより高速・高可用性なAWS独自のリレーショナルDB。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon DynamoDB",
    answer: "キーバリュー／ドキュメント型のフルマネージドNoSQLデータベース。低レイテンシで大規模に拡張可能。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon ElastiCache",
    answer: "Redis／Memcached互換のインメモリキャッシュサービス。DBの前段に置いて高速化する。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon MemoryDB for Redis",
    answer: "Redis互換で、キャッシュとしてだけでなく、それ自体を耐久性のある本番用データベースとしても使えるインメモリデータベース。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon Redshift",
    answer: "大規模データを対象にしたペタバイト級のデータウェアハウス（分析用DB）。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon DocumentDB",
    answer: "MongoDB互換のドキュメント指向データベース（JSON形式）。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon Neptune",
    answer: "ノードとエッジで表現する関係性データを扱うグラフデータベース。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon Timestream",
    answer: "時系列データ（IoTセンサー値など）に特化したデータベース。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon QLDB",
    answer: "変更履歴が改ざん不可能な形で記録される台帳（元帳）データベース。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 5,
    term: "Amazon Keyspaces",
    answer: "Apache Cassandra互換のマネージドNoSQLデータベース。",
    section: "4. データベース関連",
    tip: "違い①: RDS／Aurora＝表形式（SQL）／DynamoDB・Keyspaces＝キーバリュー・NoSQL／DocumentDB＝JSON文書／Neptune＝グラフ（関係性）／Timestream＝時系列／QLDB＝改ざん不可な台帳／違い②: RDS＝複数DBエンジンに対応した「汎用」マネージドDB／Aurora＝AWS独自の「高性能版」（MySQL・PostgreSQL互換のみ）／違い③: ElastiCache＝DBの手前に置く「キャッシュ」（データ消失を許容）／MemoryDB for Redis＝それ自体が「本番用DB」として使える高耐久インメモリDB／違い④: ElastiCache／MemoryDB＝高速な「インメモリ」処理向け／Redshift＝大量データを分析する「データウェアハウス」"
  },
  {
    page: 6,
    term: "Amazon VPC",
    answer: "AWS上に自分専用の仮想ネットワーク空間を構築するサービス。サブネット・ルートテーブル等で構成する。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "Amazon Route 53",
    answer: "DNS（ドメイン名前解決）サービス。ドメイン登録やヘルスチェック、トラフィックルーティングも行う。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "Amazon CloudFront",
    answer: "コンテンツ配信ネットワーク（CDN）。世界中のエッジロケーションでキャッシュし配信を高速化する。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "AWS Direct Connect",
    answer: "オンプレミスとAWS間を専用線で接続するサービス。安定した帯域と低レイテンシが特徴。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "AWS Site-to-Site VPN",
    answer: "オンプレミスとAWS間をインターネット経由で暗号化接続するVPNサービス。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "Amazon API Gateway",
    answer: "REST／WebSocket APIの作成・公開・管理・スロットリングを行うマネージドサービス。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "Elastic Load Balancing (ELB)",
    answer: "複数のリソースにトラフィックを自動分散する負荷分散サービス（ALB／NLB／GLB／CLBの総称）。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "AWS Transit Gateway",
    answer: "複数のVPCやオンプレミス拠点を1つのハブに接続し、ネットワークを一元管理するサービス。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "AWS Global Accelerator",
    answer: "AWSのグローバルネットワークを使い、ユーザーを最も近い・最適なエンドポイントへ振り分けるサービス。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "AWS PrivateLink",
    answer: "VPCとAWSサービス間をインターネットを経由せずプライベート接続するサービス。",
    section: "5. ネットワーキング関連",
    tip: "違い①: Direct Connect＝専用線（安定・高速だが構築に時間とコスト）／VPN＝インターネット経由の暗号化接続（すぐ使えるが速度は回線依存）／違い②: VPCピアリング＝1対1のVPC接続／Transit Gateway＝多数のVPC・拠点をハブでまとめて接続／違い③: CloudFront＝コンテンツを「配信」（キャッシュで高速化）／Global Accelerator＝ユーザーを最適な「入口」へ振り分け"
  },
  {
    page: 6,
    term: "CIDR",
    answer: "IPアドレスの範囲を「10.0.0.0/16」のように表記する方式。VPCやサブネットの大きさ（使えるIPアドレスの数）を決める。",
    section: "5. ネットワーキング関連",
    tip: "違い: セキュリティグループ＝「インスタンス単位」のファイアウォール、ステートフル（戻りの通信は自動許可）／ネットワークACL＝「サブネット単位」のファイアウォール、ステートレス（戻りの通信も個別に許可が必要）"
  },
  {
    page: 6,
    term: "サブネット",
    answer: "VPCのIPアドレス範囲をさらに分割した、小さなネットワーク区画。AZごとに作成する。",
    section: "5. ネットワーキング関連",
    tip: "違い: セキュリティグループ＝「インスタンス単位」のファイアウォール、ステートフル（戻りの通信は自動許可）／ネットワークACL＝「サブネット単位」のファイアウォール、ステートレス（戻りの通信も個別に許可が必要）"
  },
  {
    page: 6,
    term: "パブリックサブネット",
    answer: "インターネットゲートウェイへの経路を持ち、インターネットと直接通信できるサブネット（Webサーバー等を配置）。",
    section: "5. ネットワーキング関連",
    tip: "違い: セキュリティグループ＝「インスタンス単位」のファイアウォール、ステートフル（戻りの通信は自動許可）／ネットワークACL＝「サブネット単位」のファイアウォール、ステートレス（戻りの通信も個別に許可が必要）"
  },
  {
    page: 6,
    term: "プライベートサブネット",
    answer: "インターネットゲートウェイへの経路を持たず、外部から直接アクセスできないサブネット（DBサーバー等を配置）。",
    section: "5. ネットワーキング関連",
    tip: "違い: セキュリティグループ＝「インスタンス単位」のファイアウォール、ステートフル（戻りの通信は自動許可）／ネットワークACL＝「サブネット単位」のファイアウォール、ステートレス（戻りの通信も個別に許可が必要）"
  },
  {
    page: 6,
    term: "セキュリティグループ",
    answer: "EC2インスタンス単位に設定する仮想ファイアウォール。許可ルールのみ設定でき、戻りの通信は自動的に許可される（ステートフル）。",
    section: "5. ネットワーキング関連",
    tip: "違い: セキュリティグループ＝「インスタンス単位」のファイアウォール、ステートフル（戻りの通信は自動許可）／ネットワークACL＝「サブネット単位」のファイアウォール、ステートレス（戻りの通信も個別に許可が必要）"
  },
  {
    page: 6,
    term: "ネットワークACL",
    answer: "サブネット単位に設定する仮想ファイアウォール。許可・拒否の両方を設定でき、戻りの通信も明示的に許可が必要（ステートレス）。",
    section: "5. ネットワーキング関連",
    tip: "違い: セキュリティグループ＝「インスタンス単位」のファイアウォール、ステートフル（戻りの通信は自動許可）／ネットワークACL＝「サブネット単位」のファイアウォール、ステートレス（戻りの通信も個別に許可が必要）"
  },
  {
    page: 6,
    term: "VPCフローログ",
    answer: "VPC内のネットワークインターフェースを行き来する通信の情報（送信元・宛先・ポート等）を記録する機能。トラブルシューティングやセキュリティ分析に使う。",
    section: "5. ネットワーキング関連",
    tip: "違い: セキュリティグループ＝「インスタンス単位」のファイアウォール、ステートフル（戻りの通信は自動許可）／ネットワークACL＝「サブネット単位」のファイアウォール、ステートレス（戻りの通信も個別に許可が必要）"
  },
  {
    page: 6,
    term: "VPCピアリング",
    answer: "2つのVPCを1対1で接続し、あたかも同じネットワークであるかのように通信できるようにする機能。",
    section: "5. ネットワーキング関連",
    tip: "違い: セキュリティグループ＝「インスタンス単位」のファイアウォール、ステートフル（戻りの通信は自動許可）／ネットワークACL＝「サブネット単位」のファイアウォール、ステートレス（戻りの通信も個別に許可が必要）"
  },
  {
    page: 7,
    term: "AWS IAM",
    answer: "AWSリソースへのアクセスを「誰が」「何を」できるか制御する、ユーザー・ロール・ポリシーの管理サービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: IAM＝AWSを操作する「社員・システム」の権限管理／Cognito＝アプリを使う「一般ユーザー」の認証管理／IAM Identity Center＝複数アカウントへの「SSO」ログイン／Organizations＝複数アカウント「全体」のガバナンス"
  },
  {
    page: 7,
    term: "IAM Identity Center",
    answer: "複数のAWSアカウントやアプリケーションへのシングルサインオン（SSO）を提供するサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: IAM＝AWSを操作する「社員・システム」の権限管理／Cognito＝アプリを使う「一般ユーザー」の認証管理／IAM Identity Center＝複数アカウントへの「SSO」ログイン／Organizations＝複数アカウント「全体」のガバナンス"
  },
  {
    page: 7,
    term: "AWS Organizations",
    answer: "複数のAWSアカウントを一元管理し、統合請求やSCP（サービスコントロールポリシー）で権限を制御する。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: IAM＝AWSを操作する「社員・システム」の権限管理／Cognito＝アプリを使う「一般ユーザー」の認証管理／IAM Identity Center＝複数アカウントへの「SSO」ログイン／Organizations＝複数アカウント「全体」のガバナンス"
  },
  {
    page: 7,
    term: "Amazon Cognito",
    answer: "モバイル・Webアプリのエンドユーザー向けに、サインアップ・サインイン・認証機能を提供するサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: IAM＝AWSを操作する「社員・システム」の権限管理／Cognito＝アプリを使う「一般ユーザー」の認証管理／IAM Identity Center＝複数アカウントへの「SSO」ログイン／Organizations＝複数アカウント「全体」のガバナンス"
  },
  {
    page: 7,
    term: "AWS Directory Service",
    answer: "Microsoft Active Directoryと連携・互換のディレクトリサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: IAM＝AWSを操作する「社員・システム」の権限管理／Cognito＝アプリを使う「一般ユーザー」の認証管理／IAM Identity Center＝複数アカウントへの「SSO」ログイン／Organizations＝複数アカウント「全体」のガバナンス"
  },
  {
    page: 7,
    term: "AWS KMS",
    answer: "暗号化に使う鍵（キー）を作成・管理するサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い①: KMS＝暗号化「鍵」の管理／Secrets Manager＝パスワード等の「機密情報そのもの」の管理／違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出／違い③: WAF＝Webアプリへの「攻撃」を防ぐ（アプリ層）／Shield＝「DDoS」から守る（ネットワーク層）"
  },
  {
    page: 7,
    term: "AWS Secrets Manager",
    answer: "DBのパスワードやAPIキーなどの機密情報を安全に保管・自動ローテーションするサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い①: KMS＝暗号化「鍵」の管理／Secrets Manager＝パスワード等の「機密情報そのもの」の管理／違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出／違い③: WAF＝Webアプリへの「攻撃」を防ぐ（アプリ層）／Shield＝「DDoS」から守る（ネットワーク層）"
  },
  {
    page: 7,
    term: "Amazon Macie",
    answer: "機械学習でS3内のデータをスキャンし、個人情報(PII)などの機密データを検出するサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い①: KMS＝暗号化「鍵」の管理／Secrets Manager＝パスワード等の「機密情報そのもの」の管理／違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出／違い③: WAF＝Webアプリへの「攻撃」を防ぐ（アプリ層）／Shield＝「DDoS」から守る（ネットワーク層）"
  },
  {
    page: 7,
    term: "Amazon GuardDuty",
    answer: "VPCフローログ等を機械学習で分析し、不正アクセスや異常な挙動を検知する脅威検出サービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い①: KMS＝暗号化「鍵」の管理／Secrets Manager＝パスワード等の「機密情報そのもの」の管理／違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出／違い③: WAF＝Webアプリへの「攻撃」を防ぐ（アプリ層）／Shield＝「DDoS」から守る（ネットワーク層）"
  },
  {
    page: 7,
    term: "Amazon Inspector",
    answer: "EC2・コンテナ・Lambdaを自動スキャンし、既知の脆弱性を検出するサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い①: KMS＝暗号化「鍵」の管理／Secrets Manager＝パスワード等の「機密情報そのもの」の管理／違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出／違い③: WAF＝Webアプリへの「攻撃」を防ぐ（アプリ層）／Shield＝「DDoS」から守る（ネットワーク層）"
  },
  {
    page: 7,
    term: "AWS WAF",
    answer: "Webアプリケーションに対するSQLインジェクション等の攻撃を防ぐファイアウォール。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い①: KMS＝暗号化「鍵」の管理／Secrets Manager＝パスワード等の「機密情報そのもの」の管理／違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出／違い③: WAF＝Webアプリへの「攻撃」を防ぐ（アプリ層）／Shield＝「DDoS」から守る（ネットワーク層）"
  },
  {
    page: 7,
    term: "AWS Shield",
    answer: "DDoS攻撃からAWSリソースを保護するサービス（Standardは無料で全アカウントに自動適用）。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い①: KMS＝暗号化「鍵」の管理／Secrets Manager＝パスワード等の「機密情報そのもの」の管理／違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出／違い③: WAF＝Webアプリへの「攻撃」を防ぐ（アプリ層）／Shield＝「DDoS」から守る（ネットワーク層）"
  },
  {
    page: 7,
    term: "AWS Firewall Manager",
    answer: "複数アカウント・VPCにまたがるWAFやShieldのルールを一元管理するサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い①: KMS＝暗号化「鍵」の管理／Secrets Manager＝パスワード等の「機密情報そのもの」の管理／違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出／違い③: WAF＝Webアプリへの「攻撃」を防ぐ（アプリ層）／Shield＝「DDoS」から守る（ネットワーク層）"
  },
  {
    page: 7,
    term: "AWS CloudTrail",
    answer: "AWSアカウント内のAPI呼び出し履歴（誰が・いつ・何をしたか）を記録する証跡サービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: CloudTrail＝「誰が何をしたか」の記録（操作ログ）／Config＝「設定がどう変わったか」の記録（構成変化）／Security Hub＝各種セキュリティサービスの結果を「まとめて見る」ダッシュボード"
  },
  {
    page: 7,
    term: "AWS Config",
    answer: "AWSリソースの構成変更履歴を記録し、コンプライアンス違反がないかチェックする。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: CloudTrail＝「誰が何をしたか」の記録（操作ログ）／Config＝「設定がどう変わったか」の記録（構成変化）／Security Hub＝各種セキュリティサービスの結果を「まとめて見る」ダッシュボード"
  },
  {
    page: 7,
    term: "AWS Audit Manager",
    answer: "監査対応のための証跡収集を自動化するサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: CloudTrail＝「誰が何をしたか」の記録（操作ログ）／Config＝「設定がどう変わったか」の記録（構成変化）／Security Hub＝各種セキュリティサービスの結果を「まとめて見る」ダッシュボード"
  },
  {
    page: 7,
    term: "AWS Security Hub",
    answer: "複数のセキュリティサービス（GuardDuty・Inspector・Macie等）の検出結果を一元的に集約・可視化するダッシュボード。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: CloudTrail＝「誰が何をしたか」の記録（操作ログ）／Config＝「設定がどう変わったか」の記録（構成変化）／Security Hub＝各種セキュリティサービスの結果を「まとめて見る」ダッシュボード"
  },
  {
    page: 7,
    term: "AWS Artifact",
    answer: "AWSのコンプライアンスレポートや契約書類をオンデマンドで取得できるポータル。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い: CloudTrail＝「誰が何をしたか」の記録（操作ログ）／Config＝「設定がどう変わったか」の記録（構成変化）／Security Hub＝各種セキュリティサービスの結果を「まとめて見る」ダッシュボード"
  },
  {
    page: 7,
    term: "AWS Certificate Manager (ACM)",
    answer: "Webサイトの暗号化通信(HTTPS)に使うSSL/TLS証明書を、無料で発行・管理・自動更新できるサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "補足: ACM＝「通信の暗号化」に使う証明書の管理／Fraud Detector＝「取引の不正」を検知する仕組み。似た名前のAmazon GuardDutyの検出リソースも内部的に「Detector」と呼ばれるが、こちらは脅威検出の設定単位を指す用語。"
  },
  {
    page: 7,
    term: "Amazon Fraud Detector",
    answer: "機械学習を使って、オンライン取引などにおける不正・詐欺の兆候を検知するサービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "補足: ACM＝「通信の暗号化」に使う証明書の管理／Fraud Detector＝「取引の不正」を検知する仕組み。似た名前のAmazon GuardDutyの検出リソースも内部的に「Detector」と呼ばれるが、こちらは脅威検出の設定単位を指す用語。"
  },
  {
    page: 9,
    term: "Amazon CloudWatch",
    answer: "AWSリソースのメトリクス（CPU使用率等）やログを収集・監視し、アラームを設定できるサービス。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い①: CloudWatch＝リソース単体の「状態」を監視／X-Ray＝サービスを跨いだ「リクエストの流れ」を追跡／CloudTrail（前章）＝「操作」を記録／Config（前章）＝「設定変化」を記録／違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS X-Ray",
    answer: "マイクロサービス間を跨ぐリクエストの流れを追跡し、ボトルネックやエラー箇所を可視化する分散トレーシングサービス。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い①: CloudWatch＝リソース単体の「状態」を監視／X-Ray＝サービスを跨いだ「リクエストの流れ」を追跡／CloudTrail（前章）＝「操作」を記録／Config（前章）＝「設定変化」を記録／違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS Trusted Advisor",
    answer: "コスト・セキュリティ・耐障害性など5つの観点でベストプラクティスをチェックし、改善提案を出す。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い①: CloudWatch＝リソース単体の「状態」を監視／X-Ray＝サービスを跨いだ「リクエストの流れ」を追跡／CloudTrail（前章）＝「操作」を記録／Config（前章）＝「設定変化」を記録／違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS CloudFormation",
    answer: "インフラ構成をコード（テンプレート）で定義し、自動的に構築・更新する「IaC」サービス。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い①: CloudWatch＝リソース単体の「状態」を監視／X-Ray＝サービスを跨いだ「リクエストの流れ」を追跡／CloudTrail（前章）＝「操作」を記録／Config（前章）＝「設定変化」を記録／違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS Control Tower",
    answer: "複数アカウント環境（ランディングゾーン）を、ベストプラクティスに沿って自動セットアップ・統制するサービス。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い①: CloudWatch＝リソース単体の「状態」を監視／X-Ray＝サービスを跨いだ「リクエストの流れ」を追跡／CloudTrail（前章）＝「操作」を記録／Config（前章）＝「設定変化」を記録／違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS Service Catalog",
    answer: "組織内で承認済みのITサービス（テンプレート集）を、利用者がカタログから選んで使えるようにするサービス。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い①: CloudWatch＝リソース単体の「状態」を監視／X-Ray＝サービスを跨いだ「リクエストの流れ」を追跡／CloudTrail（前章）＝「操作」を記録／Config（前章）＝「設定変化」を記録／違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS Compute Optimizer",
    answer: "リソースの使用状況をもとに、最適なインスタンスタイプ・サイズを機械学習で提案するサービス。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い①: CloudWatch＝リソース単体の「状態」を監視／X-Ray＝サービスを跨いだ「リクエストの流れ」を追跡／CloudTrail（前章）＝「操作」を記録／Config（前章）＝「設定変化」を記録／違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS Health Dashboard",
    answer: "AWS全体の障害情報や、自分のアカウントに影響するイベントを通知するダッシュボード。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い①: CloudWatch＝リソース単体の「状態」を監視／X-Ray＝サービスを跨いだ「リクエストの流れ」を追跡／CloudTrail（前章）＝「操作」を記録／Config（前章）＝「設定変化」を記録／違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS Systems Manager",
    answer: "EC2やオンプレミスサーバーの運用（パッチ適用、コマンド実行、パラメータ管理等）を一元化するサービス。",
    section: "7. 管理・運用・自動化関連",
    tip: "覚え方: セッションマネージャー＝「安全な接続」／パッチマネージャー＝「更新の自動化」／パラメータストア＝「設定値の保管庫」"
  },
  {
    page: 9,
    term: "セッションマネージャー",
    answer: "SSHキーやパスワードなしで、ブラウザ・CLI経由で安全にEC2やオンプレミスサーバーにシェル接続できる機能。",
    section: "7. 管理・運用・自動化関連",
    tip: "覚え方: セッションマネージャー＝「安全な接続」／パッチマネージャー＝「更新の自動化」／パラメータストア＝「設定値の保管庫」"
  },
  {
    page: 9,
    term: "パッチマネージャー",
    answer: "OSやソフトウェアのセキュリティパッチ適用を、スケジュールに沿って自動化する機能。",
    section: "7. 管理・運用・自動化関連",
    tip: "覚え方: セッションマネージャー＝「安全な接続」／パッチマネージャー＝「更新の自動化」／パラメータストア＝「設定値の保管庫」"
  },
  {
    page: 9,
    term: "パラメータストア",
    answer: "設定値・パスワードなどの文字列データを、階層構造で安全に一元管理できる機能（Secrets Managerより簡易な用途向け）。",
    section: "7. 管理・運用・自動化関連",
    tip: "覚え方: セッションマネージャー＝「安全な接続」／パッチマネージャー＝「更新の自動化」／パラメータストア＝「設定値の保管庫」"
  },
  {
    page: 10,
    term: "AWS CloudShell",
    answer: "ブラウザから直接使える、AWS CLIがプリインストール済みのマネージド型シェル環境。追加設定なしですぐ使える。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE／補足: CodeCommit（ソース管理）→CodeBuild（ビルド・テスト）→CodeDeploy（デプロイ）の順で、CI/CDパイプラインの各工程に対応。CodeArtifactはその過程で使うパッケージの保管場所。"
  },
  {
    page: 10,
    term: "AWS Cloud9",
    answer: "ブラウザ上で使えるクラウドベースの統合開発環境（IDE）。コード記述・実行・デバッグができる。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE／補足: CodeCommit（ソース管理）→CodeBuild（ビルド・テスト）→CodeDeploy（デプロイ）の順で、CI/CDパイプラインの各工程に対応。CodeArtifactはその過程で使うパッケージの保管場所。"
  },
  {
    page: 10,
    term: "AWS CodeCommit",
    answer: "Gitベースのソースコード管理（バージョン管理）サービス。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE／補足: CodeCommit（ソース管理）→CodeBuild（ビルド・テスト）→CodeDeploy（デプロイ）の順で、CI/CDパイプラインの各工程に対応。CodeArtifactはその過程で使うパッケージの保管場所。"
  },
  {
    page: 10,
    term: "AWS CodeBuild",
    answer: "ソースコードのビルド・テストを自動化するマネージドサービス。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE／補足: CodeCommit（ソース管理）→CodeBuild（ビルド・テスト）→CodeDeploy（デプロイ）の順で、CI/CDパイプラインの各工程に対応。CodeArtifactはその過程で使うパッケージの保管場所。"
  },
  {
    page: 10,
    term: "AWS CodeDeploy",
    answer: "EC2・Lambda・オンプレミスサーバーへのアプリケーションデプロイを自動化するサービス。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE／補足: CodeCommit（ソース管理）→CodeBuild（ビルド・テスト）→CodeDeploy（デプロイ）の順で、CI/CDパイプラインの各工程に対応。CodeArtifactはその過程で使うパッケージの保管場所。"
  },
  {
    page: 10,
    term: "AWS CodeArtifact",
    answer: "ソフトウェアの依存パッケージ（ライブラリ）を保存・共有できるアーティファクトリポジトリ。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE／補足: CodeCommit（ソース管理）→CodeBuild（ビルド・テスト）→CodeDeploy（デプロイ）の順で、CI/CDパイプラインの各工程に対応。CodeArtifactはその過程で使うパッケージの保管場所。"
  },
  {
    page: 10,
    term: "AWS Device Farm",
    answer: "実機の各種スマートフォン・タブレット上で、アプリの動作テストを自動実行できるサービス。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE／補足: CodeCommit（ソース管理）→CodeBuild（ビルド・テスト）→CodeDeploy（デプロイ）の順で、CI/CDパイプラインの各工程に対応。CodeArtifactはその過程で使うパッケージの保管場所。"
  },
  {
    page: 11,
    term: "AWS Migration Hub",
    answer: "複数の移行ツールの進捗状況を一元的に追跡・可視化するダッシュボード。",
    section: "9. 移行関連",
    tip: "違い①: Application Discovery Service＝移行「前」の現状調査／MGN＝実際の「移行」の実行／DRS＝障害時に切り替える「災害復旧」用途（普段は最小構成で待機させ、障害時にフル起動する点がMGNとの違い）／違い②: MGN＝サーバー全体の「リフト＆シフト」移行／DMS＝「データベースの中身」の移行／SCT＝DB移行時の「スキーマ変換」（DMSの前段）"
  },
  {
    page: 11,
    term: "AWS Application Discovery Service",
    answer: "オンプレミス環境のサーバー構成・使用状況を自動的に収集し、移行計画の立案を支援するサービス（移行「前」の現状調査）。",
    section: "9. 移行関連",
    tip: "違い①: Application Discovery Service＝移行「前」の現状調査／MGN＝実際の「移行」の実行／DRS＝障害時に切り替える「災害復旧」用途（普段は最小構成で待機させ、障害時にフル起動する点がMGNとの違い）／違い②: MGN＝サーバー全体の「リフト＆シフト」移行／DMS＝「データベースの中身」の移行／SCT＝DB移行時の「スキーマ変換」（DMSの前段）"
  },
  {
    page: 11,
    term: "AWS Application Migration Service (MGN)",
    answer: "サーバー（物理・仮想）をほぼそのままの構成でAWSへリフト＆シフト移行するサービス。",
    section: "9. 移行関連",
    tip: "違い①: Application Discovery Service＝移行「前」の現状調査／MGN＝実際の「移行」の実行／DRS＝障害時に切り替える「災害復旧」用途（普段は最小構成で待機させ、障害時にフル起動する点がMGNとの違い）／違い②: MGN＝サーバー全体の「リフト＆シフト」移行／DMS＝「データベースの中身」の移行／SCT＝DB移行時の「スキーマ変換」（DMSの前段）"
  },
  {
    page: 11,
    term: "AWS Database Migration Service (DMS)",
    answer: "オンプレミス・他クラウドのデータベースをAWSへ、ダウンタイムを最小限にして移行するサービス。",
    section: "9. 移行関連",
    tip: "違い①: Application Discovery Service＝移行「前」の現状調査／MGN＝実際の「移行」の実行／DRS＝障害時に切り替える「災害復旧」用途（普段は最小構成で待機させ、障害時にフル起動する点がMGNとの違い）／違い②: MGN＝サーバー全体の「リフト＆シフト」移行／DMS＝「データベースの中身」の移行／SCT＝DB移行時の「スキーマ変換」（DMSの前段）"
  },
  {
    page: 11,
    term: "AWS Schema Conversion Tool (SCT)",
    answer: "異なるDBエンジン間（例：Oracle→Aurora）でスキーマを自動変換するツール。DMSと組み合わせて使う。",
    section: "9. 移行関連",
    tip: "違い①: Application Discovery Service＝移行「前」の現状調査／MGN＝実際の「移行」の実行／DRS＝障害時に切り替える「災害復旧」用途（普段は最小構成で待機させ、障害時にフル起動する点がMGNとの違い）／違い②: MGN＝サーバー全体の「リフト＆シフト」移行／DMS＝「データベースの中身」の移行／SCT＝DB移行時の「スキーマ変換」（DMSの前段）"
  },
  {
    page: 11,
    term: "AWS Elastic Disaster Recovery (DRS)",
    answer: "オンプレミスや他クラウドのサーバーを、障害発生時に素早くAWS上で復旧できるようにするディザスタリカバリサービス。",
    section: "9. 移行関連",
    tip: "違い①: Application Discovery Service＝移行「前」の現状調査／MGN＝実際の「移行」の実行／DRS＝障害時に切り替える「災害復旧」用途（普段は最小構成で待機させ、障害時にフル起動する点がMGNとの違い）／違い②: MGN＝サーバー全体の「リフト＆シフト」移行／DMS＝「データベースの中身」の移行／SCT＝DB移行時の「スキーマ変換」（DMSの前段）"
  },
  {
    page: 11,
    term: "Amazon SQS",
    answer: "メッセージを一時的に保管するキューイングサービス。送信側と受信側の処理を疎結合にする（1対1が基本）。",
    section: "10. アプリケーション統合関連",
    tip: "違い: SQS＝メッセージを「貯めておく」キュー（1対1）／SNS＝メッセージを「一斉配信」（1対多）／EventBridge＝多様な「イベント」をきっかけに処理を呼び出す（イベント駆動の中枢）／Step Functions＝処理の「順序・流れ」を制御"
  },
  {
    page: 11,
    term: "Amazon SNS",
    answer: "1つのメッセージを複数の購読者（メール・SMS・Lambda等）に同時配信するパブリッシュ／サブスクライブ型サービス。",
    section: "10. アプリケーション統合関連",
    tip: "違い: SQS＝メッセージを「貯めておく」キュー（1対1）／SNS＝メッセージを「一斉配信」（1対多）／EventBridge＝多様な「イベント」をきっかけに処理を呼び出す（イベント駆動の中枢）／Step Functions＝処理の「順序・流れ」を制御"
  },
  {
    page: 11,
    term: "Amazon EventBridge",
    answer: "AWSサービスやSaaSからのイベントを検知し、ルールに応じて別のサービスを呼び出すイベントバス。",
    section: "10. アプリケーション統合関連",
    tip: "違い: SQS＝メッセージを「貯めておく」キュー（1対1）／SNS＝メッセージを「一斉配信」（1対多）／EventBridge＝多様な「イベント」をきっかけに処理を呼び出す（イベント駆動の中枢）／Step Functions＝処理の「順序・流れ」を制御"
  },
  {
    page: 11,
    term: "AWS Step Functions",
    answer: "複数のAWSサービスを順序立てて実行するワークフローオーケストレーションサービス。",
    section: "10. アプリケーション統合関連",
    tip: "違い: SQS＝メッセージを「貯めておく」キュー（1対1）／SNS＝メッセージを「一斉配信」（1対多）／EventBridge＝多様な「イベント」をきっかけに処理を呼び出す（イベント駆動の中枢）／Step Functions＝処理の「順序・流れ」を制御"
  },
  {
    page: 11,
    term: "AWS AppConfig",
    answer: "アプリケーションの設定値や機能フラグ（Feature Flag）を、安全に段階的にデプロイ・管理するサービス。",
    section: "10. アプリケーション統合関連",
    tip: ""
  },
  {
    page: 11,
    term: "AWS AppSync",
    answer: "GraphQL APIをマネージドで構築・運用できるサービス。リアルタイム更新やオフライン同期に強い。",
    section: "10. アプリケーション統合関連",
    tip: ""
  },
  {
    page: 11,
    term: "REST API",
    answer: "リソースごとのURLに対しHTTPメソッド（GET／POST等）でアクセスする、最も一般的なWeb API方式。",
    section: "10. アプリケーション統合関連",
    tip: "違い: REST API＝リソース単位でシンプル・汎用的／WebSocket API＝双方向・常時接続でリアルタイム性が高い／GraphQL API＝欲しいデータだけを柔軟に指定して取得できる"
  },
  {
    page: 11,
    term: "WebSocket API",
    answer: "クライアントとサーバー間で双方向・持続的な接続を維持するAPI方式。チャットやリアルタイム通知向け。",
    section: "10. アプリケーション統合関連",
    tip: "違い: REST API＝リソース単位でシンプル・汎用的／WebSocket API＝双方向・常時接続でリアルタイム性が高い／GraphQL API＝欲しいデータだけを柔軟に指定して取得できる"
  },
  {
    page: 11,
    term: "GraphQL API",
    answer: "必要なデータだけを1回のリクエストでまとめて取得できる、クエリ言語ベースのAPI方式（AppSyncで提供）。",
    section: "10. アプリケーション統合関連",
    tip: "違い: REST API＝リソース単位でシンプル・汎用的／WebSocket API＝双方向・常時接続でリアルタイム性が高い／GraphQL API＝欲しいデータだけを柔軟に指定して取得できる"
  },
  {
    page: 12,
    term: "Amazon Athena",
    answer: "S3上のデータに対してSQLクエリを直接実行できるサーバーレスの分析サービス。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "Amazon EMR",
    answer: "Hadoop／Sparkなどのビッグデータ処理フレームワークをクラスタで実行するマネージドサービス。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "Amazon Kinesis Data Streams",
    answer: "リアルタイムのストリーミングデータを収集・一時保持するKinesisのコア機能。AWSネイティブなストリーミング基盤。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "Amazon MSK (Managed Streaming for Apache Kafka)",
    answer: "オープンソースのApache Kafkaをフルマネージドで実行できるサービス。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "Apache Kafka",
    answer: "大量のストリーミングデータをリアルタイムに処理する、業界標準のオープンソース分散メッセージングシステム（AWS以外でも広く使われる技術）。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "Amazon OpenSearch Service",
    answer: "全文検索・ログ分析エンジン（旧Amazon Elasticsearch Service）。ベクトル検索にも対応。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "Amazon QuickSight",
    answer: "データを可視化するBI（ビジネスインテリジェンス）ダッシュボードサービス。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "AWS Glue",
    answer: "サーバーレスのETL（抽出・変換・格納）サービス。データカタログ機能も持つ。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "AWS Lake Formation",
    answer: "S3上にデータレイクを構築し、アクセス権限を一元管理するサービス。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 12,
    term: "AWS Data Exchange",
    answer: "サードパーティが提供するデータセットを検索・購読・利用できるデータマーケットプレイス。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」／違い②: Kinesis Data Streams＝AWSネイティブなストリーミング基盤／MSK＝使い慣れたApache Kafkaをそのままマネージドで使いたい場合の選択肢（Kafka自体はAWS製ではなくオープンソースの技術本体）／違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 13,
    term: "Amazon Rekognition",
    answer: "画像・動画の物体検出、顔検出・顔認証、不適切コンテンツの検出などを行う画像／動画分析サービス。",
    section: "12. 機械学習・AI関連サービス",
    tip: "覚え方: Rekognition＝画像・動画を「見る」／Textract＝文書から文字を「抜き出す」／Transcribe＝音声を「文字にする」／Polly＝文字を「声にする」／Translate＝言語を「変換する」"
  },
  {
    page: 13,
    term: "Amazon Textract",
    answer: "画像やPDFなどの文書から、テキスト・表・フォーム項目を構造化データとして抽出する（OCR＋レイアウト理解）。",
    section: "12. 機械学習・AI関連サービス",
    tip: "覚え方: Rekognition＝画像・動画を「見る」／Textract＝文書から文字を「抜き出す」／Transcribe＝音声を「文字にする」／Polly＝文字を「声にする」／Translate＝言語を「変換する」"
  },
  {
    page: 13,
    term: "Amazon Transcribe",
    answer: "音声データをテキストに変換する（Speech to Text）サービス。",
    section: "12. 機械学習・AI関連サービス",
    tip: "覚え方: Rekognition＝画像・動画を「見る」／Textract＝文書から文字を「抜き出す」／Transcribe＝音声を「文字にする」／Polly＝文字を「声にする」／Translate＝言語を「変換する」"
  },
  {
    page: 13,
    term: "Amazon Polly",
    answer: "テキストを自然な音声に変換する（Text to Speech）サービス。",
    section: "12. 機械学習・AI関連サービス",
    tip: "覚え方: Rekognition＝画像・動画を「見る」／Textract＝文書から文字を「抜き出す」／Transcribe＝音声を「文字にする」／Polly＝文字を「声にする」／Translate＝言語を「変換する」"
  },
  {
    page: 13,
    term: "Amazon Translate",
    answer: "テキストを別の言語へリアルタイムに翻訳する機械翻訳サービス。",
    section: "12. 機械学習・AI関連サービス",
    tip: "覚え方: Rekognition＝画像・動画を「見る」／Textract＝文書から文字を「抜き出す」／Transcribe＝音声を「文字にする」／Polly＝文字を「声にする」／Translate＝言語を「変換する」"
  },
  {
    page: 13,
    term: "Amazon Comprehend",
    answer: "自然言語処理(NLP)。感情分析・エンティティ抽出・言語検出など、テキストの「意味」を分析する。",
    section: "12. 機械学習・AI関連サービス",
    tip: "違い: Comprehend＝文章の意味を解析／Lex＝会話ボットを構築する「エンジン」／Kendra＝大量文書から答えを「検索」する"
  },
  {
    page: 13,
    term: "Amazon Lex",
    answer: "音声／テキストによる会話型インターフェース（チャットボット）を構築するエンジン。Alexaと同じ技術がベース。",
    section: "12. 機械学習・AI関連サービス",
    tip: "違い: Comprehend＝文章の意味を解析／Lex＝会話ボットを構築する「エンジン」／Kendra＝大量文書から答えを「検索」する"
  },
  {
    page: 13,
    term: "Amazon Kendra",
    answer: "社内文書やFAQなど大量のドキュメント群を対象に、自然言語の質問で検索できるエンタープライズ検索エンジン。",
    section: "12. 機械学習・AI関連サービス",
    tip: "違い: Comprehend＝文章の意味を解析／Lex＝会話ボットを構築する「エンジン」／Kendra＝大量文書から答えを「検索」する"
  },
  {
    page: 13,
    term: "Amazon Bedrock",
    answer: "複数社（Anthropic・Meta・Amazon等）の基盤モデル(FM)をAPI経由で利用できるフルマネージドの生成AIサービス。",
    section: "12. 機械学習・AI関連サービス",
    tip: "違い: Bedrock＝既存の基盤モデルを「選んでそのままAPI利用」／SageMaker＝モデルを「自分で一から構築・学習」／Amazon Q＝完成した生成AIアシスタントを「そのまま使うだけ」"
  },
  {
    page: 13,
    term: "Amazon Q",
    answer: "AWS純正の生成AIアシスタント。業務ユーザー向けの「Q Business」、開発者向けの「Q Developer」等がある。",
    section: "12. 機械学習・AI関連サービス",
    tip: "違い: Bedrock＝既存の基盤モデルを「選んでそのままAPI利用」／SageMaker＝モデルを「自分で一から構築・学習」／Amazon Q＝完成した生成AIアシスタントを「そのまま使うだけ」"
  },
  {
    page: 13,
    term: "Amazon SageMaker",
    answer: "機械学習モデルの構築・学習・デプロイ・運用までを行うEnd-to-Endのフルマネージド機械学習基盤。",
    section: "12. 機械学習・AI関連サービス",
    tip: "違い: Bedrock＝既存の基盤モデルを「選んでそのままAPI利用」／SageMaker＝モデルを「自分で一から構築・学習」／Amazon Q＝完成した生成AIアシスタントを「そのまま使うだけ」"
  },
  {
    page: 14,
    term: "Amazon SES (Simple Email Service)",
    answer: "大量のメールを送受信するためのマネージドEメール配信サービス。通知メールやマーケティングメール送信に使う。",
    section: "13. ビジネスアプリケーション関連",
    tip: "補足: Amazon Connect（コンタクトセンターの「箱」）は、12章のAmazon Lex（会話エンジンの「部品」）を音声botとして組み込んで使われることが多い。"
  },
  {
    page: 14,
    term: "Amazon WorkSpaces",
    answer: "クラウド上に仮想デスクトップ（VDI）を提供するサービス。リモートワーク環境の構築等に使う。",
    section: "13. ビジネスアプリケーション関連",
    tip: "補足: Amazon Connect（コンタクトセンターの「箱」）は、12章のAmazon Lex（会話エンジンの「部品」）を音声botとして組み込んで使われることが多い。"
  },
  {
    page: 14,
    term: "Amazon Connect",
    answer: "クラウド型のコンタクトセンター（コールセンター）を構築するサービス。",
    section: "13. ビジネスアプリケーション関連",
    tip: "補足: Amazon Connect（コンタクトセンターの「箱」）は、12章のAmazon Lex（会話エンジンの「部品」）を音声botとして組み込んで使われることが多い。"
  },
  {
    page: 14,
    term: "AWS IoT Core",
    answer: "IoTデバイスをAWSに接続し、デバイスとクラウド間の双方向通信・データ収集を行うマネージドサービス。",
    section: "14. IoT関連",
    tip: "違い: IoT Core＝デバイスとクラウドを「つなぐ」ハブ／IoT Greengrass＝デバイス側で処理を「ローカル実行」させる仕組み"
  },
  {
    page: 14,
    term: "AWS IoT Greengrass",
    answer: "IoTデバイス側（エッジ）でAWSの機能の一部をローカル実行できるようにするソフトウェア。オフライン時も処理を継続できる。",
    section: "14. IoT関連",
    tip: "違い: IoT Core＝デバイスとクラウドを「つなぐ」ハブ／IoT Greengrass＝デバイス側で処理を「ローカル実行」させる仕組み"
  },
  {
    page: 14,
    term: "AWS Pricing Calculator",
    answer: "利用前に、構成に応じた料金の見積もりを行うツール。",
    section: "15. コスト管理・請求関連",
    tip: "違い: Calculator＝使う「前」の見積もり／Cost Explorer＝使った「後」の分析／Budgets＝使いすぎ「防止」のアラート／CUR＝最も詳細な「生データ」／コスト配分タグ＝コストを「切り口ごとに」集計するためのラベル"
  },
  {
    page: 14,
    term: "AWS Cost Explorer",
    answer: "過去のコスト・使用状況をグラフで分析・可視化するツール。",
    section: "15. コスト管理・請求関連",
    tip: "違い: Calculator＝使う「前」の見積もり／Cost Explorer＝使った「後」の分析／Budgets＝使いすぎ「防止」のアラート／CUR＝最も詳細な「生データ」／コスト配分タグ＝コストを「切り口ごとに」集計するためのラベル"
  },
  {
    page: 14,
    term: "AWS Budgets",
    answer: "設定した予算のしきい値を超えそうな場合にアラートを出す機能。",
    section: "15. コスト管理・請求関連",
    tip: "違い: Calculator＝使う「前」の見積もり／Cost Explorer＝使った「後」の分析／Budgets＝使いすぎ「防止」のアラート／CUR＝最も詳細な「生データ」／コスト配分タグ＝コストを「切り口ごとに」集計するためのラベル"
  },
  {
    page: 14,
    term: "AWS Cost and Usage Report (CUR)",
    answer: "AWS利用状況とコストの、最も詳細な生データを出力するレポート機能。",
    section: "15. コスト管理・請求関連",
    tip: "違い: Calculator＝使う「前」の見積もり／Cost Explorer＝使った「後」の分析／Budgets＝使いすぎ「防止」のアラート／CUR＝最も詳細な「生データ」／コスト配分タグ＝コストを「切り口ごとに」集計するためのラベル"
  },
  {
    page: 14,
    term: "AWS Billing Conductor",
    answer: "グループ内の請求を独自のルールで再配分・カスタマイズできる請求管理サービス。",
    section: "15. コスト管理・請求関連",
    tip: "違い: Calculator＝使う「前」の見積もり／Cost Explorer＝使った「後」の分析／Budgets＝使いすぎ「防止」のアラート／CUR＝最も詳細な「生データ」／コスト配分タグ＝コストを「切り口ごとに」集計するためのラベル"
  },
  {
    page: 14,
    term: "コスト配分タグ",
    answer: "リソースに付与したタグ単位でコストを分類・集計できるようにする機能。部門別・プロジェクト別のコスト管理に使う。",
    section: "15. コスト管理・請求関連",
    tip: "違い: Calculator＝使う「前」の見積もり／Cost Explorer＝使った「後」の分析／Budgets＝使いすぎ「防止」のアラート／CUR＝最も詳細な「生データ」／コスト配分タグ＝コストを「切り口ごとに」集計するためのラベル"
  },
  {
    page: 14,
    term: "オンデマンド",
    answer: "使った分だけ課金される、最も柔軟な標準の料金モデル。初期費用や長期契約なし。",
    section: "15. コスト管理・請求関連",
    tip: "違い①: オンデマンド＝自由（一番高い）／RI・Savings Plans＝長期利用の「予約割引」／スポット＝「安いが中断あり」／Dedicated Host＝物理サーバー「丸ごと専有」／違い②: RIは「特定のインスタンスタイプ」を予約、Savings Plansは「利用金額」を約束（インスタンスタイプの変更に柔軟に対応できる）／違い③: Compute Savings Plans＝EC2・Fargate・Lambda等を横断できる最も柔軟な契約／EC2 Instance Savings Plans＝特定インスタンスファミリーに絞る代わりに割引率が高い契約"
  },
  {
    page: 14,
    term: "リザーブドインスタンス (RI)",
    answer: "1年または3年の利用を予約することで、オンデマンドより大幅割引を受けられる料金モデル。",
    section: "15. コスト管理・請求関連",
    tip: "違い①: オンデマンド＝自由（一番高い）／RI・Savings Plans＝長期利用の「予約割引」／スポット＝「安いが中断あり」／Dedicated Host＝物理サーバー「丸ごと専有」／違い②: RIは「特定のインスタンスタイプ」を予約、Savings Plansは「利用金額」を約束（インスタンスタイプの変更に柔軟に対応できる）／違い③: Compute Savings Plans＝EC2・Fargate・Lambda等を横断できる最も柔軟な契約／EC2 Instance Savings Plans＝特定インスタンスファミリーに絞る代わりに割引率が高い契約"
  },
  {
    page: 14,
    term: "Compute Savings Plans",
    answer: "EC2・Fargate・Lambdaを横断して「時間あたりの利用金額」を1〜3年契約することで割引を受けるモデル。最も柔軟。",
    section: "15. コスト管理・請求関連",
    tip: "違い①: オンデマンド＝自由（一番高い）／RI・Savings Plans＝長期利用の「予約割引」／スポット＝「安いが中断あり」／Dedicated Host＝物理サーバー「丸ごと専有」／違い②: RIは「特定のインスタンスタイプ」を予約、Savings Plansは「利用金額」を約束（インスタンスタイプの変更に柔軟に対応できる）／違い③: Compute Savings Plans＝EC2・Fargate・Lambda等を横断できる最も柔軟な契約／EC2 Instance Savings Plans＝特定インスタンスファミリーに絞る代わりに割引率が高い契約"
  },
  {
    page: 14,
    term: "EC2 Instance Savings Plans",
    answer: "特定のリージョン・インスタンスファミリー内であれば、インスタンスタイプやOSを変更しても割引が適用されるモデル。Compute Savings Plansより対象は狭いが割引率は高め。",
    section: "15. コスト管理・請求関連",
    tip: "違い①: オンデマンド＝自由（一番高い）／RI・Savings Plans＝長期利用の「予約割引」／スポット＝「安いが中断あり」／Dedicated Host＝物理サーバー「丸ごと専有」／違い②: RIは「特定のインスタンスタイプ」を予約、Savings Plansは「利用金額」を約束（インスタンスタイプの変更に柔軟に対応できる）／違い③: Compute Savings Plans＝EC2・Fargate・Lambda等を横断できる最も柔軟な契約／EC2 Instance Savings Plans＝特定インスタンスファミリーに絞る代わりに割引率が高い契約"
  },
  {
    page: 14,
    term: "スポットインスタンス",
    answer: "AWSの余剰キャパシティを入札形式で安く使える料金モデル。中断される可能性がある。",
    section: "15. コスト管理・請求関連",
    tip: "違い①: オンデマンド＝自由（一番高い）／RI・Savings Plans＝長期利用の「予約割引」／スポット＝「安いが中断あり」／Dedicated Host＝物理サーバー「丸ごと専有」／違い②: RIは「特定のインスタンスタイプ」を予約、Savings Plansは「利用金額」を約束（インスタンスタイプの変更に柔軟に対応できる）／違い③: Compute Savings Plans＝EC2・Fargate・Lambda等を横断できる最も柔軟な契約／EC2 Instance Savings Plans＝特定インスタンスファミリーに絞る代わりに割引率が高い契約"
  },
  {
    page: 14,
    term: "専有ホスト (Dedicated Host)",
    answer: "物理サーバーを1台丸ごと専有する料金モデル。ライセンスやコンプライアンス要件がある場合に利用。",
    section: "15. コスト管理・請求関連",
    tip: "違い①: オンデマンド＝自由（一番高い）／RI・Savings Plans＝長期利用の「予約割引」／スポット＝「安いが中断あり」／Dedicated Host＝物理サーバー「丸ごと専有」／違い②: RIは「特定のインスタンスタイプ」を予約、Savings Plansは「利用金額」を約束（インスタンスタイプの変更に柔軟に対応できる）／違い③: Compute Savings Plans＝EC2・Fargate・Lambda等を横断できる最も柔軟な契約／EC2 Instance Savings Plans＝特定インスタンスファミリーに絞る代わりに割引率が高い契約"
  },
  {
    page: 15,
    term: "AWS Resource Access Manager (RAM)",
    answer: "自分のアカウントが持つリソース（サブネット等）を、他のAWSアカウントと安全に共有するサービス。",
    section: "16. リソース管理・ガバナンス関連",
    tip: "違い: RAM＝リソースを「他アカウントと共有」する仕組み／Resource Groups＝リソースを「まとめて表示・管理」する仕組み／License Manager＝ソフトウェアの「ライセンス管理」"
  },
  {
    page: 15,
    term: "AWS Resource Groups",
    answer: "タグなどの条件に基づいて複数のリソースをグループ化し、まとめて表示・管理できる機能。",
    section: "16. リソース管理・ガバナンス関連",
    tip: "違い: RAM＝リソースを「他アカウントと共有」する仕組み／Resource Groups＝リソースを「まとめて表示・管理」する仕組み／License Manager＝ソフトウェアの「ライセンス管理」"
  },
  {
    page: 15,
    term: "AWS License Manager",
    answer: "自社で保有するソフトウェアライセンスの使用状況を追跡・管理するサービス。",
    section: "16. リソース管理・ガバナンス関連",
    tip: "違い: RAM＝リソースを「他アカウントと共有」する仕組み／Resource Groups＝リソースを「まとめて表示・管理」する仕組み／License Manager＝ソフトウェアの「ライセンス管理」"
  },
  {
    page: 16,
    term: "ベーシック",
    answer: "全AWSアカウントに無料で付属。ドキュメント・ホワイトペーパー・コミュニティフォーラム、Trusted Advisorの基本項目チェック、請求関連の問い合わせのみ利用可（技術サポートなし）。",
    section: "17. AWSサポートプラン",
    tip: "違い: 応答速度が速い順（＝手厚い順）：エンタープライズ（最短15分・専任TAM）→On-Ramp（最短30分・TAMチーム）→ビジネス（最短1時間・24時間365日）→デベロッパー（業務時間内のみ）→ベーシック（技術サポートなし）"
  },
  {
    page: 16,
    term: "デベロッパー",
    answer: "ベーシックに加え、営業時間内のEメールでの技術サポート（1名分の連絡先）。応答目安は重要度に応じて12〜24時間。個人の検証・開発環境向け。",
    section: "17. AWSサポートプラン",
    tip: "違い: 応答速度が速い順（＝手厚い順）：エンタープライズ（最短15分・専任TAM）→On-Ramp（最短30分・TAMチーム）→ビジネス（最短1時間・24時間365日）→デベロッパー（業務時間内のみ）→ベーシック（技術サポートなし）"
  },
  {
    page: 16,
    term: "ビジネス",
    answer: "24時間365日、電話・チャット・メールで技術サポート。緊急時の応答目安は最短1時間。Trusted Advisorの全項目チェックが利用可能。本番環境で運用する企業向け。",
    section: "17. AWSサポートプラン",
    tip: "違い: 応答速度が速い順（＝手厚い順）：エンタープライズ（最短15分・専任TAM）→On-Ramp（最短30分・TAMチーム）→ビジネス（最短1時間・24時間365日）→デベロッパー（業務時間内のみ）→ベーシック（技術サポートなし）"
  },
  {
    page: 16,
    term: "エンタープライズ On-Ramp",
    answer: "ビジネスの内容に加え、専任のプール型TAM（テクニカルアカウントマネージャー）チームが支援。緊急時の応答目安は最短30分。中規模企業向け。",
    section: "17. AWSサポートプラン",
    tip: "違い: 応答速度が速い順（＝手厚い順）：エンタープライズ（最短15分・専任TAM）→On-Ramp（最短30分・TAMチーム）→ビジネス（最短1時間・24時間365日）→デベロッパー（業務時間内のみ）→ベーシック（技術サポートなし）"
  },
  {
    page: 16,
    term: "エンタープライズ",
    answer: "専任のTAMが1名付き、最重要度の応答目安は最短15分。コンシェルジュチームのサポートも利用可能。ミッションクリティカルなワークロードを持つ大企業向け。",
    section: "17. AWSサポートプラン",
    tip: "違い: 応答速度が速い順（＝手厚い順）：エンタープライズ（最短15分・専任TAM）→On-Ramp（最短30分・TAMチーム）→ビジネス（最短1時間・24時間365日）→デベロッパー（業務時間内のみ）→ベーシック（技術サポートなし）"
  },
  {
    page: 16,
    term: "AWS Launch Wizard",
    answer: "定型的なアプリケーション（SAP、Microsoft SQL Server等）を、ベストプラクティスに沿ってウィザード形式で簡単にデプロイできるサービス。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼／違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」／補足: AWS Trusted AdvisorとAWS Compute Optimizerは7章ですでに解説済み（ベストプラクティス診断・インスタンス最適化提案）。"
  },
  {
    page: 16,
    term: "AWS Prescriptive Guidance",
    answer: "AWSが提供する、特定の技術課題に対する実践的な戦略・パターン集（具体的な導入手順のガイド）。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼／違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」／補足: AWS Trusted AdvisorとAWS Compute Optimizerは7章ですでに解説済み（ベストプラクティス診断・インスタンス最適化提案）。"
  },
  {
    page: 16,
    term: "AWSプロフェッショナルサービス",
    answer: "AWSの専門家が、移行や導入プロジェクトを直接支援する有償のコンサルティングサービス。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼／違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」／補足: AWS Trusted AdvisorとAWS Compute Optimizerは7章ですでに解説済み（ベストプラクティス診断・インスタンス最適化提案）。"
  },
  {
    page: 16,
    term: "AWS Managed Services (AMS)",
    answer: "インフラの日々の運用（監視・パッチ適用等）をAWSに委託できる、運用代行サービス。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼／違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」／補足: AWS Trusted AdvisorとAWS Compute Optimizerは7章ですでに解説済み（ベストプラクティス診断・インスタンス最適化提案）。"
  },
  {
    page: 16,
    term: "AWS Activate",
    answer: "スタートアップ向けに、AWSクレジットやトレーニング等の特典を提供する支援プログラム。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼／違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」／補足: AWS Trusted AdvisorとAWS Compute Optimizerは7章ですでに解説済み（ベストプラクティス診断・インスタンス最適化提案）。"
  },
  {
    page: 16,
    term: "AWS IQ",
    answer: "特定のAWSタスクを代行してくれる、認定を受けた個人やコンサルタントを見つけて依頼できるプラットフォーム。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼／違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」／補足: AWS Trusted AdvisorとAWS Compute Optimizerは7章ですでに解説済み（ベストプラクティス診断・インスタンス最適化提案）。"
  },
  {
    page: 16,
    term: "APN (AWS Partner Network)",
    answer: "AWSと連携するパートナー企業（コンサルティング会社・ソフトウェアベンダー等）のネットワーク・プログラム。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼／違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」／補足: AWS Trusted AdvisorとAWS Compute Optimizerは7章ですでに解説済み（ベストプラクティス診断・インスタンス最適化提案）。"
  },
  {
    page: 16,
    term: "AWS re:Post",
    answer: "AWSに関する技術的な質問を投稿・回答し合う、コミュニティ主導の無料Q&Aサイト。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼／違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」／補足: AWS Trusted AdvisorとAWS Compute Optimizerは7章ですでに解説済み（ベストプラクティス診断・インスタンス最適化提案）。"
  },
  {
    page: 17,
    term: "リージョン",
    answer: "世界各地にある独立したAWSのデータセンター群の地理的なまとまり（例：東京リージョン）。",
    section: "19. 重要な基礎コンセプト",
    tip: "違い①: リージョン＝広いエリア（国・地域単位）／AZ＝リージョン内の独立した「データセンター群」（障害分離の単位）／エッジロケーション＝ユーザーの近くでコンテンツを配信するための「最前線の拠点」／違い②: Local Zones＝特定の大都市圏に置く「リージョンの拡張」（一般的な低レイテンシ用途）／Wavelength＝通信キャリアの5G網の「内部」に置く拠点（モバイル・IoT向けの超低レイテンシ用途）"
  },
  {
    page: 17,
    term: "アベイラビリティーゾーン (AZ)",
    answer: "リージョン内にある、物理的に独立した1つ以上のデータセンター。1リージョンに複数のAZが存在する。",
    section: "19. 重要な基礎コンセプト",
    tip: "違い①: リージョン＝広いエリア（国・地域単位）／AZ＝リージョン内の独立した「データセンター群」（障害分離の単位）／エッジロケーション＝ユーザーの近くでコンテンツを配信するための「最前線の拠点」／違い②: Local Zones＝特定の大都市圏に置く「リージョンの拡張」（一般的な低レイテンシ用途）／Wavelength＝通信キャリアの5G網の「内部」に置く拠点（モバイル・IoT向けの超低レイテンシ用途）"
  },
  {
    page: 17,
    term: "エッジロケーション",
    answer: "CloudFrontなどがコンテンツをキャッシュする、リージョンより多数・世界中に分散した拠点。",
    section: "19. 重要な基礎コンセプト",
    tip: "違い①: リージョン＝広いエリア（国・地域単位）／AZ＝リージョン内の独立した「データセンター群」（障害分離の単位）／エッジロケーション＝ユーザーの近くでコンテンツを配信するための「最前線の拠点」／違い②: Local Zones＝特定の大都市圏に置く「リージョンの拡張」（一般的な低レイテンシ用途）／Wavelength＝通信キャリアの5G網の「内部」に置く拠点（モバイル・IoT向けの超低レイテンシ用途）"
  },
  {
    page: 17,
    term: "AWS Local Zones",
    answer: "リージョンから、大都市など利用者により近い場所にコンピューティング・ストレージを拡張する拠点。超低レイテンシが必要な用途向け。",
    section: "19. 重要な基礎コンセプト",
    tip: "違い①: リージョン＝広いエリア（国・地域単位）／AZ＝リージョン内の独立した「データセンター群」（障害分離の単位）／エッジロケーション＝ユーザーの近くでコンテンツを配信するための「最前線の拠点」／違い②: Local Zones＝特定の大都市圏に置く「リージョンの拡張」（一般的な低レイテンシ用途）／Wavelength＝通信キャリアの5G網の「内部」に置く拠点（モバイル・IoT向けの超低レイテンシ用途）"
  },
  {
    page: 17,
    term: "AWS Wavelength",
    answer: "通信キャリアの5Gネットワークの中にAWSインフラを組み込み、モバイル端末からの超低レイテンシを実現するサービス。",
    section: "19. 重要な基礎コンセプト",
    tip: "違い①: リージョン＝広いエリア（国・地域単位）／AZ＝リージョン内の独立した「データセンター群」（障害分離の単位）／エッジロケーション＝ユーザーの近くでコンテンツを配信するための「最前線の拠点」／違い②: Local Zones＝特定の大都市圏に置く「リージョンの拡張」（一般的な低レイテンシ用途）／Wavelength＝通信キャリアの5G網の「内部」に置く拠点（モバイル・IoT向けの超低レイテンシ用途）"
  },
  {
    page: 17,
    term: "AWSの責任（\"of\"the Cloud）",
    answer: "クラウド「自体」のセキュリティ。物理的な設備、ハードウェア、ネットワークインフラ、仮想化基盤の保護を担う。",
    section: "19. 重要な基礎コンセプト",
    tip: "覚え方: \"of the Cloud\"＝AWSの責任（インフラそのもの）／\"in the Cloud\"＝顧客の責任（クラウドの中に置いたもの）"
  },
  {
    page: 17,
    term: "顧客の責任（\"in\" the Cloud）",
    answer: "クラウド「の中」のセキュリティ。OS・アプリのパッチ適用、データの暗号化、IAM設定、ネットワーク設定（セキュリティグループ等）を担う。",
    section: "19. 重要な基礎コンセプト",
    tip: "覚え方: \"of the Cloud\"＝AWSの責任（インフラそのもの）／\"in the Cloud\"＝顧客の責任（クラウドの中に置いたもの）"
  },
  {
    page: 17,
    term: "運用上の優秀性",
    answer: "システムを運用・監視し、継続的にプロセスや手順を改善する。",
    section: "19. 重要な基礎コンセプト",
    tip: ""
  },
  {
    page: 17,
    term: "セキュリティ",
    answer: "データ・システムを保護し、リスクを評価・軽減する。",
    section: "19. 重要な基礎コンセプト",
    tip: ""
  },
  {
    page: 17,
    term: "信頼性",
    answer: "障害から復旧し、需要に応じて動的にリソースを調達できるようにする。",
    section: "19. 重要な基礎コンセプト",
    tip: ""
  },
  {
    page: 17,
    term: "パフォーマンス効率",
    answer: "コンピューティングリソースを効率的に使い、需要の変化に対応する。",
    section: "19. 重要な基礎コンセプト",
    tip: ""
  },
  {
    page: 17,
    term: "コスト最適化",
    answer: "不要なコストを削減し、最も低い価格でシステムを運用する。",
    section: "19. 重要な基礎コンセプト",
    tip: ""
  },
  {
    page: 17,
    term: "持続可能性",
    answer: "環境への影響を最小限に抑えた運用を目指す（2021年に追加された6本目の柱）。",
    section: "19. 重要な基礎コンセプト",
    tip: ""
  },
  {
    page: 18,
    term: "ビジネス",
    answer: "経営層の視点。クラウド導入の成果とビジネス戦略を結びつける（IT戦略とビジネス戦略の整合）。",
    section: "20. AWS Cloud Adoption Framework（CAF）",
    tip: "補足: CAFは「クラウド導入を成功させるための組織的な視点の枠組み」。Well-Architected Frameworkが技術寄りなのに対し、CAFは経営・組織・人材まで含めたより広い観点で語られる点が違い。"
  },
  {
    page: 18,
    term: "人材",
    answer: "組織の人材・スキル・文化の変革を管理する（研修、組織構造の見直し等）。",
    section: "20. AWS Cloud Adoption Framework（CAF）",
    tip: "補足: CAFは「クラウド導入を成功させるための組織的な視点の枠組み」。Well-Architected Frameworkが技術寄りなのに対し、CAFは経営・組織・人材まで含めたより広い観点で語られる点が違い。"
  },
  {
    page: 18,
    term: "ガバナンス",
    answer: "ビジネスリスクを管理し、目標達成のためのポリシー・プロセスを整備する。",
    section: "20. AWS Cloud Adoption Framework（CAF）",
    tip: "補足: CAFは「クラウド導入を成功させるための組織的な視点の枠組み」。Well-Architected Frameworkが技術寄りなのに対し、CAFは経営・組織・人材まで含めたより広い観点で語られる点が違い。"
  },
  {
    page: 18,
    term: "プラットフォーム",
    answer: "アプリケーションを実行するための、クラウド上の新しいITプラットフォームを構築・運用する。",
    section: "20. AWS Cloud Adoption Framework（CAF）",
    tip: "補足: CAFは「クラウド導入を成功させるための組織的な視点の枠組み」。Well-Architected Frameworkが技術寄りなのに対し、CAFは経営・組織・人材まで含めたより広い観点で語られる点が違い。"
  },
  {
    page: 18,
    term: "セキュリティ",
    answer: "組織のセキュリティ目標に沿って、可視性・監査・自動対応の仕組みを構築する。",
    section: "20. AWS Cloud Adoption Framework（CAF）",
    tip: "補足: CAFは「クラウド導入を成功させるための組織的な視点の枠組み」。Well-Architected Frameworkが技術寄りなのに対し、CAFは経営・組織・人材まで含めたより広い観点で語られる点が違い。"
  },
  {
    page: 18,
    term: "運用",
    answer: "新しいクラウド環境における、日々のITワークロードの運用方法を定義する。",
    section: "20. AWS Cloud Adoption Framework（CAF）",
    tip: "補足: CAFは「クラウド導入を成功させるための組織的な視点の枠組み」。Well-Architected Frameworkが技術寄りなのに対し、CAFは経営・組織・人材まで含めたより広い観点で語られる点が違い。"
  },
  {
    page: 18,
    term: "Rehost（リホスト）",
    answer: "「リフト＆シフト」。アプリを変更せず、そのままクラウドへ移行する。最も速く着手できる。",
    section: "21. 移行戦略「6つのR」",
    tip: "覚え方: 手間が小さい順：Rehost（そのまま）→Replatform（少し最適化）→Refactor（作り直し）。Repurchase＝製品ごと乗り換え／Retain＝今は移行しない／Retire＝やめる、の3つは移行しない・別ルートの選択肢"
  },
  {
    page: 18,
    term: "Replatform（リプラットフォーム）",
    answer: "「リフト・チューン・アンド・シフト」。DBをRDSに変える等、小さな最適化を加えつつ移行する。",
    section: "21. 移行戦略「6つのR」",
    tip: "覚え方: 手間が小さい順：Rehost（そのまま）→Replatform（少し最適化）→Refactor（作り直し）。Repurchase＝製品ごと乗り換え／Retain＝今は移行しない／Retire＝やめる、の3つは移行しない・別ルートの選択肢"
  },
  {
    page: 18,
    term: "Repurchase（リパーチェス）",
    answer: "既存システムを廃止し、SaaS製品など新しい製品に置き換える（例：CRMをSalesforceに切り替え）。",
    section: "21. 移行戦略「6つのR」",
    tip: "覚え方: 手間が小さい順：Rehost（そのまま）→Replatform（少し最適化）→Refactor（作り直し）。Repurchase＝製品ごと乗り換え／Retain＝今は移行しない／Retire＝やめる、の3つは移行しない・別ルートの選択肢"
  },
  {
    page: 18,
    term: "Refactor / Re-architect（リファクタ）",
    answer: "クラウドネイティブな設計に、アプリケーションを根本から作り直す。手間はかかるが将来性が高い。",
    section: "21. 移行戦略「6つのR」",
    tip: "覚え方: 手間が小さい順：Rehost（そのまま）→Replatform（少し最適化）→Refactor（作り直し）。Repurchase＝製品ごと乗り換え／Retain＝今は移行しない／Retire＝やめる、の3つは移行しない・別ルートの選択肢"
  },
  {
    page: 18,
    term: "Retain（保持）",
    answer: "今はまだ移行せず、オンプレミスのまま残す（移行の優先度が低い、依存関係が複雑等の理由）。",
    section: "21. 移行戦略「6つのR」",
    tip: "覚え方: 手間が小さい順：Rehost（そのまま）→Replatform（少し最適化）→Refactor（作り直し）。Repurchase＝製品ごと乗り換え／Retain＝今は移行しない／Retire＝やめる、の3つは移行しない・別ルートの選択肢"
  },
  {
    page: 18,
    term: "Retire（廃止）",
    answer: "もう使われていない・不要と判断したシステムを廃止する。",
    section: "21. 移行戦略「6つのR」",
    tip: "覚え方: 手間が小さい順：Rehost（そのまま）→Replatform（少し最適化）→Refactor（作り直し）。Repurchase＝製品ごと乗り換え／Retain＝今は移行しない／Retire＝やめる、の3つは移行しない・別ルートの選択肢"
  },
];