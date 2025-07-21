// Mock数据 - 十条音频内容
const mockAudioData = [
    {
        id: 1,
        title: "大案打更人-揭秘京城的神秘税报案",
        creator: "犯罪心理专家",
        avatar: "https://via.placeholder.com/100x100/ff6b6b/fff?text=犯罪",
        cover: "https://via.placeholder.com/400x400/ff6b6b/fff?text=悬疑",
        description: "通过心理分析，揭示明朝京城一起神秘税务案件背后的真相，探索古代官场的黑暗面...",
        duration: "06:42",
        likes: 2234,
        comments: 324,
        tags: ["AI推荐", "悬疑", "历史"],
        aiReason: "基于您对历史悬疑内容的兴趣推荐",
        category: "悬疑"
    },
    {
        id: 2,
        title: "科技前沿：量子计算的突破与未来",
        creator: "科技解读者",
        avatar: "https://via.placeholder.com/100x100/667eea/fff?text=科技",
        cover: "https://via.placeholder.com/400x400/667eea/fff?text=量子",
        description: "深度解析量子计算技术的最新突破，探讨其对未来社会的深远影响...",
        duration: "08:15",
        likes: 1876,
        comments: 542,
        tags: ["前沿科技", "量子", "未来"],
        aiReason: "您最近关注了科技类内容",
        category: "科技"
    },
    {
        id: 3,
        title: "商业密码：小公司如何逆袭大企业",
        creator: "商业观察家",
        avatar: "https://via.placeholder.com/100x100/764ba2/fff?text=商业",
        cover: "https://via.placeholder.com/400x400/764ba2/fff?text=商业",
        description: "分析成功案例，揭示小公司在竞争中脱颖而出的核心策略和思维模式...",
        duration: "12:30",
        likes: 3421,
        comments: 678,
        tags: ["商业策略", "创业", "逆袭"],
        aiReason: "推荐给对商业感兴趣的你",
        category: "商业"
    },
    {
        id: 4,
        title: "心理学漫谈：为什么我们总是拖延",
        creator: "心理学博士",
        avatar: "https://via.placeholder.com/100x100/ff8e8e/fff?text=心理",
        cover: "https://via.placeholder.com/400x400/ff8e8e/fff?text=拖延",
        description: "从认知心理学角度分析拖延症的成因，提供科学有效的改善方法...",
        duration: "15:22",
        likes: 4567,
        comments: 892,
        tags: ["心理学", "自我提升", "拖延症"],
        aiReason: "基于您的收听偏好智能推荐",
        category: "心理"
    },
    {
        id: 5,
        title: "宇宙奥秘：黑洞吞噬恒星的瞬间",
        creator: "天体物理学家",
        avatar: "https://via.placeholder.com/100x100/4ecdc4/fff?text=宇宙",
        cover: "https://via.placeholder.com/400x400/4ecdc4/fff?text=黑洞",
        description: "通过最新观测数据，带你见证黑洞吞噬恒星的惊人瞬间，探索宇宙的神秘力量...",
        duration: "09:45",
        likes: 2876,
        comments: 445,
        tags: ["天体物理", "黑洞", "宇宙"],
        aiReason: "发现您对宇宙话题很感兴趣",
        category: "科学"
    },
    {
        id: 6,
        title: "投资智慧：巴菲特的价值投资密码",
        creator: "价值投资达人",
        avatar: "https://via.placeholder.com/100x100/f7b733/fff?text=投资",
        cover: "https://via.placeholder.com/400x400/f7b733/fff?text=巴菲特",
        description: "深度解读巴菲特的投资哲学，学习价值投资的核心理念和实战技巧...",
        duration: "18:33",
        likes: 5234,
        comments: 1021,
        tags: ["价值投资", "巴菲特", "理财"],
        aiReason: "为您精选的投资理财内容",
        category: "投资"
    },
    {
        id: 7,
        title: "文学之美：红楼梦中的人性洞察",
        creator: "文学评论家",
        avatar: "https://via.placeholder.com/100x100/eb4d4b/fff?text=文学",
        cover: "https://via.placeholder.com/400x400/eb4d4b/fff?text=红楼梦",
        description: "透过红楼梦的经典片段，探讨曹雪芹笔下的人性复杂与社会百态...",
        duration: "22:15",
        likes: 3654,
        comments: 743,
        tags: ["文学", "红楼梦", "人性"],
        aiReason: "匹配您的文学品味",
        category: "文学"
    },
    {
        id: 8,
        title: "健康生活：科学减肥的正确打开方式",
        creator: "营养师小王",
        avatar: "https://via.placeholder.com/100x100/6c5ce7/fff?text=健康",
        cover: "https://via.placeholder.com/400x400/6c5ce7/fff?text=减肥",
        description: "基于最新营养学研究，分享科学减肥的方法，告别节食误区...",
        duration: "14:28",
        likes: 4321,
        comments: 865,
        tags: ["健康", "减肥", "营养学"],
        aiReason: "根据您的生活习惯推荐",
        category: "健康"
    },
    {
        id: 9,
        title: "AI时代：人工智能如何改变工作",
        creator: "AI研究员",
        avatar: "https://via.placeholder.com/100x100/2d3436/fff?text=AI",
        cover: "https://via.placeholder.com/400x400/2d3436/fff?text=人工智能",
        description: "分析AI技术对各行业的冲击，探讨未来工作模式的变革趋势...",
        duration: "16:45",
        likes: 6543,
        comments: 1234,
        tags: ["人工智能", "未来工作", "科技趋势"],
        aiReason: "AI话题正在热议",
        category: "科技"
    },
    {
        id: 10,
        title: "音乐治愈：古典音乐的心理疗愈力量",
        creator: "音乐治疗师",
        avatar: "https://via.placeholder.com/100x100/a29bfe/fff?text=音乐",
        cover: "https://via.placeholder.com/400x400/a29bfe/fff?text=古典音乐",
        description: "探索古典音乐对大脑的积极影响，了解音乐治疗在现代医学中的应用...",
        duration: "11:20",
        likes: 2987,
        comments: 567,
        tags: ["古典音乐", "治愈", "心理健康"],
        aiReason: "为您推荐放松心情的内容",
        category: "音乐"
    }
];

// 全局状态管理
class AppState {
    constructor() {
        this.currentIndex = 0;
        this.isPlaying = false;
        this.currentTime = 135; // 当前播放时间（秒）
        this.progress = 0;
        this.volume = 1;
        this.isAiPanelOpen = false;
        this.likedItems = new Set();
        this.followedCreators = new Set();
    }

    getCurrentAudio() {
        return mockAudioData[this.currentIndex];
    }

    nextAudio() {
        this.currentIndex = (this.currentIndex + 1) % mockAudioData.length;
        this.updateUI();
    }

    prevAudio() {
        this.currentIndex = (this.currentIndex - 1 + mockAudioData.length) % mockAudioData.length;
        this.updateUI();
    }

    togglePlay() {
        this.isPlaying = !this.isPlaying;
        this.updatePlayButton();
    }

    toggleLike() {
        const currentAudio = this.getCurrentAudio();
        if (this.likedItems.has(currentAudio.id)) {
            this.likedItems.delete(currentAudio.id);
            currentAudio.likes--;
        } else {
            this.likedItems.add(currentAudio.id);
            currentAudio.likes++;
        }
        this.updateLikeButton();
    }

    toggleFollow() {
        const currentAudio = this.getCurrentAudio();
        const creator = currentAudio.creator;
        
        if (this.followedCreators.has(creator)) {
            this.followedCreators.delete(creator);
        } else {
            this.followedCreators.add(creator);
        }
        this.updateFollowButton();
    }

    updateUI() {
        const currentAudio = this.getCurrentAudio();
        
        // 更新底部信息
        document.getElementById('currentTitle').textContent = currentAudio.title;
        document.querySelector('.creator-name').textContent = `@${currentAudio.creator}`;
        document.querySelector('.creator-avatar').src = currentAudio.avatar;
        
        // 更新AI标签
        const aiTagsContainer = document.querySelector('.ai-tags');
        aiTagsContainer.innerHTML = '';
        currentAudio.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'ai-tag';
            tagElement.textContent = tag;
            aiTagsContainer.appendChild(tagElement);
        });

        // 更新交互按钮数据
        document.querySelector('.like-btn .count').textContent = this.formatCount(currentAudio.likes);
        document.querySelector('.comment-btn .count').textContent = this.formatCount(currentAudio.comments);

        // 更新音频卡片
        this.renderAudioCard();
        
        // 更新按钮状态
        this.updateLikeButton();
        this.updateFollowButton();
    }

    renderAudioCard() {
        const container = document.getElementById('audioContainer');
        const currentAudio = this.getCurrentAudio();
        
        container.innerHTML = `
            <div class="audio-card" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${currentAudio.cover}')">
                <div class="audio-card-content">
                    <img src="${currentAudio.cover}" alt="封面" class="audio-cover">
                    <h2 class="audio-title-large">${currentAudio.title}</h2>
                    <p class="audio-description">${currentAudio.description}</p>
                </div>
            </div>
        `;
    }

    updatePlayButton() {
        const playBtn = document.getElementById('playPauseBtn');
        const icon = playBtn.querySelector('i');
        
        if (this.isPlaying) {
            icon.className = 'fas fa-pause';
        } else {
            icon.className = 'fas fa-play';
        }
    }

    updateLikeButton() {
        const likeBtn = document.querySelector('.like-btn');
        const icon = likeBtn.querySelector('i');
        const currentAudio = this.getCurrentAudio();
        
        if (this.likedItems.has(currentAudio.id)) {
            likeBtn.classList.add('liked');
            icon.className = 'fas fa-heart';
        } else {
            likeBtn.classList.remove('liked');
            icon.className = 'far fa-heart';
        }
        
        likeBtn.querySelector('.count').textContent = this.formatCount(currentAudio.likes);
    }

    updateFollowButton() {
        const followBtn = document.querySelector('.follow-btn');
        const icon = followBtn.querySelector('i');
        const currentAudio = this.getCurrentAudio();
        
        if (this.followedCreators.has(currentAudio.creator)) {
            icon.className = 'fas fa-check';
            followBtn.style.background = 'rgba(76, 175, 80, 0.8)';
        } else {
            icon.className = 'fas fa-plus';
            followBtn.style.background = 'rgba(255, 255, 255, 0.15)';
        }
    }

    formatCount(count) {
        if (count >= 10000) {
            return (count / 10000).toFixed(1) + 'w';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count.toString();
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}

// 初始化应用状态
const appState = new AppState();

// 触摸事件处理
class TouchHandler {
    constructor() {
        this.startY = 0;
        this.startTime = 0;
        this.isScrolling = false;
        this.minSwipeDistance = 50;
        this.maxSwipeTime = 300;
    }

    init() {
        const container = document.getElementById('audioContainer');
        
        container.addEventListener('touchstart', (e) => {
            this.startY = e.touches[0].clientY;
            this.startTime = Date.now();
            this.isScrolling = false;
        }, { passive: true });

        container.addEventListener('touchmove', (e) => {
            // 防止默认滚动行为
            e.preventDefault();
        }, { passive: false });

        container.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            const deltaY = this.startY - endY;
            const deltaTime = endTime - this.startTime;

            // 检查是否为有效的滑动手势
            if (Math.abs(deltaY) > this.minSwipeDistance && deltaTime < this.maxSwipeTime) {
                if (deltaY > 0) {
                    // 向上滑动 - 下一个音频
                    appState.nextAudio();
                    this.showSwipeAnimation('up');
                } else {
                    // 向下滑动 - 上一个音频
                    appState.prevAudio();
                    this.showSwipeAnimation('down');
                }
            }
        }, { passive: true });
    }

    showSwipeAnimation(direction) {
        const container = document.getElementById('audioContainer');
        container.style.transform = direction === 'up' ? 'translateY(-20px)' : 'translateY(20px)';
        container.style.opacity = '0.7';
        
        setTimeout(() => {
            container.style.transform = 'translateY(0)';
            container.style.opacity = '1';
        }, 200);
    }
}

// 音频播放模拟
class AudioSimulator {
    constructor() {
        this.progressInterval = null;
    }

    init() {
        this.updateProgress();
    }

    play() {
        if (!this.progressInterval) {
            this.progressInterval = setInterval(() => {
                if (appState.isPlaying) {
                    appState.currentTime += 1;
                    const currentAudio = appState.getCurrentAudio();
                    const totalSeconds = this.timeToSeconds(currentAudio.duration);
                    
                    if (appState.currentTime >= totalSeconds) {
                        appState.currentTime = 0;
                        appState.nextAudio();
                    }
                    
                    this.updateProgress();
                }
            }, 1000);
        }
    }

    pause() {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
    }

    updateProgress() {
        const currentAudio = appState.getCurrentAudio();
        const totalSeconds = this.timeToSeconds(currentAudio.duration);
        const progress = (appState.currentTime / totalSeconds) * 100;
        
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        document.querySelector('.progress-thumb').style.right = `calc(100% - ${progress}%)`;
        document.querySelector('.current-time').textContent = appState.formatTime(appState.currentTime);
        document.querySelector('.total-time').textContent = currentAudio.duration;
    }

    timeToSeconds(timeStr) {
        const parts = timeStr.split(':');
        return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }

    seekTo(percentage) {
        const currentAudio = appState.getCurrentAudio();
        const totalSeconds = this.timeToSeconds(currentAudio.duration);
        appState.currentTime = Math.floor((percentage / 100) * totalSeconds);
        this.updateProgress();
    }
}

// 初始化音频模拟器
const audioSimulator = new AudioSimulator();

// AI面板控制
function toggleAiPanel() {
    const panel = document.getElementById('aiPanel');
    appState.isAiPanelOpen = !appState.isAiPanelOpen;
    
    if (appState.isAiPanelOpen) {
        panel.classList.add('active');
        updateAiPanelContent();
    } else {
        panel.classList.remove('active');
    }
}

function closeAiPanel() {
    const panel = document.getElementById('aiPanel');
    panel.classList.remove('active');
    appState.isAiPanelOpen = false;
}

function updateAiPanelContent() {
    const currentAudio = appState.getCurrentAudio();
    const panel = document.getElementById('aiPanel');
    
    // 更新AI摘要
    panel.querySelector('.ai-summary p').textContent = currentAudio.description;
    
    // 更新推荐标签
    const tagsContainer = panel.querySelector('.suggestion-tags');
    tagsContainer.innerHTML = '';
    
    const relatedTags = ['历史文化', '心理分析', '社会现象', '人文思考', '深度解读'];
    relatedTags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'suggestion-tag';
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => {
            // 模拟推荐相关内容
            console.log(`搜索相关内容: ${tag}`);
        });
        tagsContainer.appendChild(tagElement);
    });
}

// 分享功能
function shareContent() {
    const currentAudio = appState.getCurrentAudio();
    
    if (navigator.share) {
        navigator.share({
            title: currentAudio.title,
            text: currentAudio.description,
            url: window.location.href
        });
    } else {
        // 降级处理：复制链接到剪贴板
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('链接已复制到剪贴板');
        });
    }
}

// 显示提示消息
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 20px;
        font-size: 14px;
        z-index: 9999;
        backdrop-filter: blur(20px);
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// 事件监听器
document.addEventListener('DOMContentLoaded', () => {
    // 初始化触摸处理
    const touchHandler = new TouchHandler();
    touchHandler.init();
    
    // 初始化音频模拟器
    audioSimulator.init();
    audioSimulator.play();
    
    // 播放/暂停按钮
    document.getElementById('playPauseBtn').addEventListener('click', () => {
        appState.togglePlay();
        if (appState.isPlaying) {
            audioSimulator.play();
        } else {
            audioSimulator.pause();
        }
    });

    // 进度条点击
    document.querySelector('.progress-bar').addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const percentage = ((e.clientX - rect.left) / rect.width) * 100;
        audioSimulator.seekTo(percentage);
    });

    // 交互按钮事件
    document.querySelector('.like-btn').addEventListener('click', () => {
        appState.toggleLike();
    });

    document.querySelector('.follow-btn').addEventListener('click', () => {
        appState.toggleFollow();
        const currentAudio = appState.getCurrentAudio();
        const action = appState.followedCreators.has(currentAudio.creator) ? '已关注' : '已取消关注';
        showToast(`${action} ${currentAudio.creator}`);
    });

    document.querySelector('.share-btn').addEventListener('click', shareContent);

    document.querySelector('.comment-btn').addEventListener('click', () => {
        showToast('评论功能开发中...');
    });

    document.querySelector('.ai-btn').addEventListener('click', toggleAiPanel);

    document.querySelector('.dislike-btn').addEventListener('click', () => {
        showToast('已标记为不感兴趣');
        appState.nextAudio();
    });

    // 播放控制按钮
    document.querySelector('.backward').addEventListener('click', () => {
        appState.currentTime = Math.max(0, appState.currentTime - 15);
        audioSimulator.updateProgress();
    });

    document.querySelector('.forward').addEventListener('click', () => {
        const currentAudio = appState.getCurrentAudio();
        const totalSeconds = audioSimulator.timeToSeconds(currentAudio.duration);
        appState.currentTime = Math.min(totalSeconds, appState.currentTime + 15);
        audioSimulator.updateProgress();
    });

    document.querySelector('.playlist').addEventListener('click', () => {
        showToast('播放列表功能开发中...');
    });

    // 导航标签切换
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.nav-tab.active').classList.remove('active');
            tab.classList.add('active');
            showToast(`切换到${tab.textContent}频道`);
        });
    });

    // 底部导航
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('active')) {
                const text = item.querySelector('span').textContent;
                showToast(`${text}功能开发中...`);
            }
        });
    });

    // 初始化UI
    appState.updateUI();
    
    console.log('快听应用初始化完成');
});

// 键盘快捷键支持（开发调试用）
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            e.preventDefault();
            appState.nextAudio();
            break;
        case 'ArrowDown':
            e.preventDefault();
            appState.prevAudio();
            break;
        case ' ':
            e.preventDefault();
            document.getElementById('playPauseBtn').click();
            break;
        case 'l':
            document.querySelector('.like-btn').click();
            break;
        case 'f':
            document.querySelector('.follow-btn').click();
            break;
    }
});

// 防止上下文菜单
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// 防止双击缩放
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false); 