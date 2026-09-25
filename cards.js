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
    term: "AWS Elastic Beanstalk",
    answer: "コードをアップロードするだけで、EC2・ELB・Auto Scalingなどの環境構築を自動化するPaaS的サービス。",
    section: "2. コンピューティング関連",
    tip: "違い: EC2＝自由度が高い仮想サーバー（自分で管理）／Elastic Beanstalk＝EC2等をまとめて自動構築（半自動）／Lightsail＝定額・簡単設定のVPS（初心者・小規模向け）／Lambda＝サーバーの存在を意識しないサーバーレス"
  },
  {
    page: 2,
    term: "AWS Fargate",
    answer: "ECSやEKSの実行基盤となる、サーバーレスのコンテナ実行エンジン。EC2インスタンスの管理が不要になる。",
    section: "2. コンピューティング関連",
    tip: "違い: ECS＝AWS独自方式のコンテナ管理／EKS＝Kubernetes方式のコンテナ管理／Fargate＝ECS・EKSを「サーバーレスで」動かすための実行エンジン（EC2起動タイプの代替）／ECR＝コンテナの置き場所"
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
    term: "ポイントインタイムリカバリ (PITR)",
    answer: "DynamoDBやRDS等で、過去35日以内の任意の時点の状態にデータベースを復元できる継続的バックアップ機能。",
    section: "3. ストレージ関連",
    tip: "違い: AWS Backup＝各種データの「バックアップ運用」を手動・スケジュールで一元管理／PITR＝秒単位で自動的に継続バックアップされ「任意の時点」に戻せる機能（DB個別に有効化）／CloudHSM＝暗号鍵を専用ハードウェアで管理する「鍵管理の最上位オプション」"
  },
  {
    page: 6,
    term: "Amazon API Gateway",
    answer: "REST／WebSocket APIの作成・公開・管理・スロットリングを行うマネージドサービス。",
    section: "5. ネットワーキング関連",
    tip: ""
  },
  {
    page: 7,
    term: "Amazon GuardDuty",
    answer: "VPCフローログ等を機械学習で分析し、不正アクセスや異常な挙動を検知する脅威検出サービス。",
    section: "6. セキュリティ・アイデンティティ関連",
    tip: "違い②: Macie＝S3内の「機密データ」を検出／GuardDuty＝ネットワーク上の「不正な挙動」を検知／Inspector＝ソフトウェアの「脆弱性」を検出"
  },
  {
    page: 9,
    term: "AWS CloudFormation",
    answer: "インフラ構成をコード（テンプレート）で定義し、自動的に構築・更新する「IaC」サービス。",
    section: "7. 管理・運用・自動化関連",
    tip: "違い②: CloudFormation＝インフラを「コードで自動構築」／Control Tower＝マルチアカウント環境の「統制の仕組み」自体を自動セットアップ／Service Catalog＝承認済みテンプレートを「選んで使わせる」仕組み"
  },
  {
    page: 9,
    term: "AWS Health Dashboard",
    answer: "AWS全体の障害情報や、自分のアカウントに影響するイベントを通知するダッシュボード。",
    section: "7. 管理・運用・自動化関連",
    tip: ""
  },
  {
    page: 9,
    term: "AWS Systems Manager",
    answer: "EC2やオンプレミスサーバーの運用（パッチ適用、コマンド実行、パラメータ管理等）を一元化するサービス。",
    section: "7. 管理・運用・自動化関連",
    tip: ""
  },
  {
    page: 10,
    term: "AWS CloudShell",
    answer: "ブラウザから直接使える、AWS CLIがプリインストール済みのマネージド型シェル環境。追加設定なしですぐ使える。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE"
  },
  {
    page: 10,
    term: "AWS Cloud9",
    answer: "ブラウザ上で使えるクラウドベースの統合開発環境（IDE）。コード記述・実行・デバッグができる。",
    section: "8. 開発者ツール関連",
    tip: "違い: CloudShell＝「コマンド操作」用の手軽なシェル／Cloud9＝「コードを書く」ためのフル機能IDE"
  },
  {
    page: 10,
    term: "AWS CodeBuild",
    answer: "ソースコードのビルド・テストを自動化するマネージドサービス。",
    section: "8. 開発者ツール関連",
    tip: "補足: CodeCommit（ソース管理）→CodeBuild（ビルド・テスト）→CodeDeploy（デプロイ）の順で、CI/CDパイプラインの各工程に対応。CodeArtifactはその過程で使うパッケージの保管場所。"
  },
  {
    page: 11,
    term: "AWS Application Discovery Service",
    answer: "オンプレミス環境のサーバー構成・使用状況を自動的に収集し、移行計画の立案を支援するサービス（移行「前」の現状調査）。",
    section: "9. 移行関連",
    tip: "違い①: Application Discovery Service＝移行「前」の現状調査／MGN＝実際の「移行」の実行／DRS＝障害時に切り替える「災害復旧」用途（普段は最小構成で待機させ、障害時にフル起動する点がMGNとの違い）"
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
    page: 12,
    term: "Amazon EMR",
    answer: "Hadoop／Sparkなどのビッグデータ処理フレームワークをクラスタで実行するマネージドサービス。",
    section: "11. 分析関連",
    tip: "違い①: Athena＝S3データに「都度SQLで問い合わせ」／EMR＝大規模データを「クラスタで本格処理」／Glue＝データの「変換・統合」（ETL）／QuickSight＝結果を「可視化」"
  },
  {
    page: 12,
    term: "AWS Data Exchange",
    answer: "サードパーティが提供するデータセットを検索・購読・利用できるデータマーケットプレイス。",
    section: "11. 分析関連",
    tip: "違い③: Data Exchange＝外部データを「調達」する場所／Lake Formation＝集めたデータを「データレイクとして管理」する仕組み"
  },
  {
    page: 14,
    term: "Amazon WorkSpaces",
    answer: "クラウド上に仮想デスクトップ（VDI）を提供するサービス。リモートワーク環境の構築等に使う。",
    section: "13. ビジネスアプリケーション関連",
    tip: ""
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
    term: "リザーブドインスタンス (RI)",
    answer: "1年または3年の利用を予約することで、オンデマンドより大幅割引を受けられる料金モデル。",
    section: "15. コスト管理・請求関連",
    tip: "違い①: オンデマンド＝自由（一番高い）／RI・Savings Plans＝長期利用の「予約割引」／スポット＝「安いが中断あり」／Dedicated Host＝物理サーバー「丸ごと専有」／違い②: RIは「特定のインスタンスタイプ」を予約、Savings Plansは「利用金額」を約束（インスタンスタイプの変更に柔軟に対応できる）"
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
    page: 16,
    term: "デベロッパーサポートプラン",
    answer: "ベーシックに加え、営業時間内のEメールでの技術サポート（1名分の連絡先）。応答目安は重要度に応じて12〜24時間。個人の検証・開発環境向け。",
    section: "17. AWSサポートプラン",
    tip: "違い: 応答速度が速い順（＝手厚い順）：エンタープライズ（最短15分・専任TAM）→On-Ramp（最短30分・TAMチーム）→ビジネス（最短1時間・24時間365日）→デベロッパー（業務時間内のみ）→ベーシック（技術サポートなし）"
  },
  {
    page: 16,
    term: "ビジネスサポートプラン",
    answer: "24時間365日、電話・チャット・メールで技術サポート。緊急時の応答目安は最短1時間。Trusted Advisorの全項目チェックが利用可能。本番環境で運用する企業向け。",
    section: "17. AWSサポートプラン",
    tip: "違い: 応答速度が速い順（＝手厚い順）：エンタープライズ（最短15分・専任TAM）→On-Ramp（最短30分・TAMチーム）→ビジネス（最短1時間・24時間365日）→デベロッパー（業務時間内のみ）→ベーシック（技術サポートなし）"
  },
  {
    page: 16,
    term: "AWS Launch Wizard",
    answer: "定型的なアプリケーション（SAP、Microsoft SQL Server等）を、ベストプラクティスに沿ってウィザード形式で簡単にデプロイできるサービス。",
    section: "18. AWSの支援・パートナープログラム",
    tip: ""
  },
  {
    page: 16,
    term: "AWS Managed Services (AMS)",
    answer: "インフラの日々の運用（監視・パッチ適用等）をAWSに委託できる、運用代行サービス。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い①: プロフェッショナルサービス＝AWS社員による「コンサルティング」／Managed Services＝「運用そのもの」を委託／IQ＝個人の専門家に「単発」で作業を依頼"
  },
  {
    page: 16,
    term: "APN (AWS Partner Network)",
    answer: "AWSと連携するパートナー企業（コンサルティング会社・ソフトウェアベンダー等）のネットワーク・プログラム。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」"
  },
  {
    page: 16,
    term: "AWS re:Post",
    answer: "AWSに関する技術的な質問を投稿・回答し合う、コミュニティ主導の無料Q&Aサイト。",
    section: "18. AWSの支援・パートナープログラム",
    tip: "違い②: AWS Activate＝スタートアップ向けの「支援プログラム」／APN＝パートナー企業の「ネットワーク」／re:Post＝無料の「コミュニティQ&A」"
  },
  {
    page: 18,
    term: "移行戦略6つのR Replatform（リプラットフォーム）",
    answer: "「リフト・チューン・アンド・シフト」。DBをRDSに変える等、小さな最適化を加えつつ移行する。",
    section: "21. 移行戦略「6つのR」",
    tip: "覚え方: 手間が小さい順：Rehost（そのまま）→Replatform（少し最適化）→Refactor（作り直し）。Repurchase＝製品ごと乗り換え／Retain＝今は移行しない／Retire＝やめる、の3つは移行しない・別ルートの選択肢"
  },
  {
    page: 18,
    term: "移行戦略6つのR Refactor / Re-architect（リファクタ）",
    answer: "クラウドネイティブな設計に、アプリケーションを根本から作り直す。手間はかかるが将来性が高い。",
    section: "21. 移行戦略「6つのR」",
    tip: "覚え方: 手間が小さい順：Rehost（そのまま）→Replatform（少し最適化）→Refactor（作り直し）。Repurchase＝製品ごと乗り換え／Retain＝今は移行しない／Retire＝やめる、の3つは移行しない・別ルートの選択肢"
  },
];