USE [OeeAPP]
GO
/****** Object:  Table [dbo].[rep_tmpp]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[rep_tmpp](
	[err_mahnum] [varchar](5) NULL,
	[err_mafpn] [varchar](20) NULL,
	[err_date] [date] NULL,
	[err_shift] [varchar](2) NULL,
	[err_usr] [varchar](5) NULL,
	[離型痕] [int] NULL,
	[冷料] [int] NULL,
	[黑點] [int] NULL,
	[亮點] [int] NULL,
	[白污] [int] NULL,
	[壓傷] [int] NULL,
	[刮傷] [int] NULL,
	[縮水] [int] NULL,
	[破片] [int] NULL,
	[暗影] [int] NULL,
	[其他] [int] NULL,
	[正常] [int] NULL,
	[殘膠] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[rep_tmpp] ([err_mahnum], [err_mafpn], [err_date], [err_shift], [err_usr], [離型痕], [冷料], [黑點], [亮點], [白污], [壓傷], [刮傷], [縮水], [破片], [暗影], [其他], [正常], [殘膠]) VALUES (N'S1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), N'A', N'測試', NULL, 0, 0, 0, 0, NULL, 0, NULL, NULL, NULL, 0, 0, NULL)
INSERT [dbo].[rep_tmpp] ([err_mahnum], [err_mafpn], [err_date], [err_shift], [err_usr], [離型痕], [冷料], [黑點], [亮點], [白污], [壓傷], [刮傷], [縮水], [破片], [暗影], [其他], [正常], [殘膠]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), N'A', N'測試', NULL, 1, 0, 0, 0, NULL, 0, NULL, NULL, NULL, 0, 46, NULL)
INSERT [dbo].[rep_tmpp] ([err_mahnum], [err_mafpn], [err_date], [err_shift], [err_usr], [離型痕], [冷料], [黑點], [亮點], [白污], [壓傷], [刮傷], [縮水], [破片], [暗影], [其他], [正常], [殘膠]) VALUES (N'T1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), N'A', N'測試', NULL, 0, 0, 0, 0, NULL, 0, NULL, NULL, NULL, 0, 0, NULL)
INSERT [dbo].[rep_tmpp] ([err_mahnum], [err_mafpn], [err_date], [err_shift], [err_usr], [離型痕], [冷料], [黑點], [亮點], [白污], [壓傷], [刮傷], [縮水], [破片], [暗影], [其他], [正常], [殘膠]) VALUES (N'T2', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), N'A', N'測試', NULL, 0, 0, 0, 0, NULL, NULL, 0, NULL, NULL, 0, 0, NULL)
INSERT [dbo].[rep_tmpp] ([err_mahnum], [err_mafpn], [err_date], [err_shift], [err_usr], [離型痕], [冷料], [黑點], [亮點], [白污], [壓傷], [刮傷], [縮水], [破片], [暗影], [其他], [正常], [殘膠]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), N'B', N'測試', NULL, 8, 4, 3, 1, NULL, 2, NULL, NULL, NULL, 3, 180, NULL)
/****** Object:  Table [dbo].[rep_tmp]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[rep_tmp](
	[rep_mahnum] [varchar](5) NULL,
	[rep_mold] [varchar](2) NULL,
	[rep_pn] [varchar](20) NULL,
	[rep_date] [date] NULL,
	[rep_time] [time](5) NULL,
	[rep_shift] [varchar](5) NULL,
	[rep_user] [varchar](6) NULL,
	[rep_aur] [int] NULL,
	[rep_aug] [int] NULL,
	[rep_scount] [float] NULL,
	[rep_ecount] [float] NULL,
	[rep_wksec] [float] NULL,
	[rep_cto] [int] NULL,
	[rep_cytime] [decimal](18, 2) NULL,
	[rep_tryd] [int] NULL,
	[rep_ptmd] [varchar](25) NULL,
	[rep_hev] [float] NULL,
	[rep_price] [numeric](18, 2) NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[rep_tmp] ([rep_mahnum], [rep_mold], [rep_pn], [rep_date], [rep_time], [rep_shift], [rep_user], [rep_aur], [rep_aug], [rep_scount], [rep_ecount], [rep_wksec], [rep_cto], [rep_cytime], [rep_tryd], [rep_ptmd], [rep_hev], [rep_price]) VALUES (N'FBT-2', N'M1', N'ZAUO023B-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x05804F6B00010000 AS Time), N'A', N'測試', 0, 0, 1099612, NULL, NULL, 21, NULL, 95, N'LC-1500', 0.0019, CAST(2.60 AS Numeric(18, 2)))
INSERT [dbo].[rep_tmp] ([rep_mahnum], [rep_mold], [rep_pn], [rep_date], [rep_time], [rep_shift], [rep_user], [rep_aur], [rep_aug], [rep_scount], [rep_ecount], [rep_wksec], [rep_cto], [rep_cytime], [rep_tryd], [rep_ptmd], [rep_hev], [rep_price]) VALUES (N'S1', N'M1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0500B7AD21010000 AS Time), N'A', N'測試', 0, 0, 0, 3000, NULL, 20, NULL, 95, N'LC-1500', 0.0016, CAST(15.20 AS Numeric(18, 2)))
INSERT [dbo].[rep_tmp] ([rep_mahnum], [rep_mold], [rep_pn], [rep_date], [rep_time], [rep_shift], [rep_user], [rep_aur], [rep_aug], [rep_scount], [rep_ecount], [rep_wksec], [rep_cto], [rep_cytime], [rep_tryd], [rep_ptmd], [rep_hev], [rep_price]) VALUES (N'S1', N'M1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0580010B27010000 AS Time), N'A', N'測試', 1, 46, 0, 3000, NULL, 15, NULL, 95, N'LC-1500', 0.0021, CAST(3.00 AS Numeric(18, 2)))
INSERT [dbo].[rep_tmp] ([rep_mahnum], [rep_mold], [rep_pn], [rep_date], [rep_time], [rep_shift], [rep_user], [rep_aur], [rep_aug], [rep_scount], [rep_ecount], [rep_wksec], [rep_cto], [rep_cytime], [rep_tryd], [rep_ptmd], [rep_hev], [rep_price]) VALUES (N'T1', N'M1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0580BB4703010000 AS Time), N'A', N'測試', 0, 0, 0, NULL, NULL, 15, NULL, 95, N'LC-1500', 0.0021, CAST(3.00 AS Numeric(18, 2)))
INSERT [dbo].[rep_tmp] ([rep_mahnum], [rep_mold], [rep_pn], [rep_date], [rep_time], [rep_shift], [rep_user], [rep_aur], [rep_aug], [rep_scount], [rep_ecount], [rep_wksec], [rep_cto], [rep_cytime], [rep_tryd], [rep_ptmd], [rep_hev], [rep_price]) VALUES (N'T2', N'M1', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0500A9861A010000 AS Time), N'A', N'測試', 0, 0, 0, NULL, NULL, 6, NULL, 85, N'HL-8504', 0.0052, CAST(13.00 AS Numeric(18, 2)))
INSERT [dbo].[rep_tmp] ([rep_mahnum], [rep_mold], [rep_pn], [rep_date], [rep_time], [rep_shift], [rep_user], [rep_aur], [rep_aug], [rep_scount], [rep_ecount], [rep_wksec], [rep_cto], [rep_cytime], [rep_tryd], [rep_ptmd], [rep_hev], [rep_price]) VALUES (N'T5', N'M1', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x050059F825010000 AS Time), N'B', N'測試', 21, 180, 0, 2000, NULL, 36, NULL, 95, N'LC-1500', 0.0008, CAST(2.10 AS Numeric(18, 2)))
/****** Object:  Table [dbo].[MOLD_STS]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MOLD_STS](
	[sts_pn] [varchar](20) NOT NULL,
	[sts_mold] [nchar](10) NOT NULL,
	[sts_hole1] [nchar](10) NULL,
	[sts_hole2] [nchar](10) NULL,
	[sts_die01] [nchar](20) NULL,
	[sts_die01date] [date] NULL,
	[sts_die01count] [int] NULL,
	[sts_die02] [nchar](20) NULL,
	[sts_die02date] [date] NULL,
	[sts_die02count] [int] NULL,
	[sts_bbk101] [nchar](20) NULL,
	[sts_bbk101date] [date] NULL,
	[sts_bbk101count] [int] NULL,
	[sts_bbk102] [nchar](20) NULL,
	[sts_bbk102date] [date] NULL,
	[sts_bbk102count] [int] NULL,
	[sts_bbk201] [nchar](20) NULL,
	[sts_bbk201date] [date] NULL,
	[sts_bbk201count] [int] NULL,
	[sts_bbk202] [nchar](20) NULL,
	[sts_bbk202date] [date] NULL,
	[sts_bbk202count] [int] NULL,
	[sts_bbk301] [nchar](20) NULL,
	[sts_bbk301date] [date] NULL,
	[sts_bbk301count] [int] NULL,
	[sts_bbk302] [nchar](20) NULL,
	[sts_bbk302date] [date] NULL,
	[sts_bbk302count] [int] NULL,
	[sts_sprueb] [nchar](20) NULL,
	[sts_spruebdate] [date] NULL,
	[sts_spruebcount] [int] NULL,
	[sts_sprue] [nchar](20) NULL,
	[sts_spruedate] [date] NULL,
	[sts_spruecount] [int] NULL,
	[sts_utk01] [nchar](20) NULL,
	[sts_utk01date] [date] NULL,
	[sts_utk01count] [int] NULL,
	[sts_utk02] [nchar](20) NULL,
	[sts_utk02date] [date] NULL,
	[sts_utk02count] [int] NULL,
 CONSTRAINT [PK_MOLD_STS] PRIMARY KEY CLUSTERED 
(
	[sts_mold] ASC,
	[sts_pn] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO062A-P02-01.T1', N'M1        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO050M-P02-01.TZ', N'M10       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO050ZV-P02-01.T1', N'M11       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO089AV-P02-01.T2', N'M12       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO150D-P02-03.T1', N'M13       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'BUK020B-P02-02.TZ', N'M14       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO080ADV-P02-01.T1', N'M15       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO080AFV-P02-01.T1', N'M16       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO052D-P02-01.T1 ', N'M17       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO050NV-P02-01.T3', N'M18       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO062A-P02-02.T1', N'M19       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO052C-P02-03.T1', N'M2        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO062A-P02-01.T1 ', N'M2        ', N'P8-1      ', N'P8-2      ', N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2202372)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO062A-P02-98.T1', N'M20       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO052E-P02-01.T1', N'M21       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO050Y-P02-01.T1', N'M3        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO055N-P02-02.T1', N'M4        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO036F-P02-02.T1', N'M5        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO030AA-P02-01.TZ', N'M6        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO013A-P02-01.T1', N'M7        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO023B-P02-01.T1', N'M8        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
INSERT [dbo].[MOLD_STS] ([sts_pn], [sts_mold], [sts_hole1], [sts_hole2], [sts_die01], [sts_die01date], [sts_die01count], [sts_die02], [sts_die02date], [sts_die02count], [sts_bbk101], [sts_bbk101date], [sts_bbk101count], [sts_bbk102], [sts_bbk102date], [sts_bbk102count], [sts_bbk201], [sts_bbk201date], [sts_bbk201count], [sts_bbk202], [sts_bbk202date], [sts_bbk202count], [sts_bbk301], [sts_bbk301date], [sts_bbk301count], [sts_bbk302], [sts_bbk302date], [sts_bbk302count], [sts_sprueb], [sts_spruebdate], [sts_spruebcount], [sts_sprue], [sts_spruedate], [sts_spruecount], [sts_utk01], [sts_utk01date], [sts_utk01count], [sts_utk02], [sts_utk02date], [sts_utk02count]) VALUES (N'ZAUO050AC-P02-01.T1', N'M9        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0)
/****** Object:  Table [dbo].[MOLD_MVS]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MOLD_MVS](
	[mvs_pn] [varchar](20) NOT NULL,
	[mvs_mold] [nchar](10) NOT NULL,
	[mvs_hole1] [nchar](10) NULL,
	[mvs_hole2] [nchar](10) NULL,
	[mvs_die01] [nchar](20) NULL,
	[mvs_die01date] [date] NULL,
	[mvs_die01count] [int] NULL,
	[mvs_die02] [nchar](20) NULL,
	[mvs_die02date] [date] NULL,
	[mvs_die02count] [int] NULL,
	[mvs_bbk101] [nchar](20) NULL,
	[mvs_bbk101date] [date] NULL,
	[mvs_bbk101count] [int] NULL,
	[mvs_bbk102] [nchar](20) NULL,
	[mvs_bbk102date] [date] NULL,
	[mvs_bbk102count] [int] NULL,
	[mvs_bbk201] [nchar](20) NULL,
	[mvs_bbk201date] [date] NULL,
	[mvs_bbk201count] [int] NULL,
	[mvs_bbk202] [nchar](20) NULL,
	[mvs_bbk202date] [date] NULL,
	[mvs_bbk202count] [int] NULL,
	[mvs_bbk301] [nchar](20) NULL,
	[mvs_bbk301date] [date] NULL,
	[mvs_bbk301count] [int] NULL,
	[mvs_bbk302] [nchar](20) NULL,
	[mvs_bbk302date] [date] NULL,
	[mvs_bbk302count] [int] NULL,
	[mvs_cut01] [nchar](20) NULL,
	[mvs_cut01date] [date] NULL,
	[mvs_cut01count] [int] NULL,
	[mvs_cut02] [nchar](20) NULL,
	[mvs_cut02date] [date] NULL,
	[mvs_cut02count] [int] NULL,
	[mvs_pin] [nchar](20) NULL,
	[mvs_pindate] [date] NULL,
	[mvs_pincount] [int] NULL,
	[mvs_inldie01] [nchar](20) NULL,
	[mvs_inldie01date] [date] NULL,
	[mvs_inldie01count] [int] NULL,
	[mvs_inldie02] [nchar](20) NULL,
	[mvs_inldie02date] [date] NULL,
	[mvs_inldie02count] [int] NULL,
	[mvs_utk01] [nchar](20) NULL,
	[mvs_utk01date] [date] NULL,
	[mvs_utk01count] [int] NULL,
	[mvs_utk02] [nchar](20) NULL,
	[mvs_utk02date] [date] NULL,
	[mvs_utk02count] [int] NULL,
	[mvs_tpe] [nchar](20) NULL,
	[mvs_tpedate] [date] NULL,
	[mvs_tpecount] [int] NULL,
 CONSTRAINT [PK_MOLD_MVS] PRIMARY KEY CLUSTERED 
(
	[mvs_pn] ASC,
	[mvs_mold] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'BUK020B-P02-02.TZ', N'M14       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO013A-P02-01.T1', N'M7        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO023B-P02-01.T1', N'M8        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO030AA-P02-01.TZ', N'M6        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO036F-P02-02.T1', N'M5        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO050AC-P02-01.T1', N'M9        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO050M-P02-01.TZ', N'M10       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO050NV-P02-01.T3', N'M18       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO050Y-P02-01.T1', N'M3        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO050ZV-P02-01.T1', N'M11       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO052C-P02-03.T1', N'M2        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO052D-P02-01.T1 ', N'M17       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO052E-P02-01.T1', N'M21       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO055N-P02-02.T1', N'M4        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO062A-P02-01.T1', N'M1        ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO062A-P02-01.T1 ', N'M2        ', N'P8-1      ', N'P8-2      ', N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672, N'LLK15-001-62A01     ', CAST(0xA33D0B00 AS Date), 2205672)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO062A-P02-02.T1', N'M19       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO062A-P02-98.T1', N'M20       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO080ADV-P02-01.T1', N'M15       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO080AFV-P02-01.T1', N'M16       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO089AV-P02-01.T2', N'M12       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
INSERT [dbo].[MOLD_MVS] ([mvs_pn], [mvs_mold], [mvs_hole1], [mvs_hole2], [mvs_die01], [mvs_die01date], [mvs_die01count], [mvs_die02], [mvs_die02date], [mvs_die02count], [mvs_bbk101], [mvs_bbk101date], [mvs_bbk101count], [mvs_bbk102], [mvs_bbk102date], [mvs_bbk102count], [mvs_bbk201], [mvs_bbk201date], [mvs_bbk201count], [mvs_bbk202], [mvs_bbk202date], [mvs_bbk202count], [mvs_bbk301], [mvs_bbk301date], [mvs_bbk301count], [mvs_bbk302], [mvs_bbk302date], [mvs_bbk302count], [mvs_cut01], [mvs_cut01date], [mvs_cut01count], [mvs_cut02], [mvs_cut02date], [mvs_cut02count], [mvs_pin], [mvs_pindate], [mvs_pincount], [mvs_inldie01], [mvs_inldie01date], [mvs_inldie01count], [mvs_inldie02], [mvs_inldie02date], [mvs_inldie02count], [mvs_utk01], [mvs_utk01date], [mvs_utk01count], [mvs_utk02], [mvs_utk02date], [mvs_utk02count], [mvs_tpe], [mvs_tpedate], [mvs_tpecount]) VALUES (N'ZAUO150D-P02-03.T1', N'M13       ', NULL, NULL, N'1                   ', NULL, 0, N'2                   ', NULL, 0, N'3                   ', NULL, 0, N'4                   ', NULL, 0, N'5                   ', NULL, 0, N'6                   ', NULL, 0, N'7                   ', NULL, 0, N'8                   ', NULL, 0, N'9                   ', NULL, 0, N'11                  ', NULL, 0, N'12                  ', NULL, 0, N'13                  ', NULL, 0, N'14                  ', NULL, 0, N'15                  ', NULL, 0, N'16                  ', NULL, 0, N'17                  ', NULL, 0)
/****** Object:  Table [dbo].[MOLD_CHS]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MOLD_CHS](
	[chs_pn] [varchar](20) NULL,
	[chs_mold] [nchar](10) NULL,
	[chs_hole1] [nchar](10) NULL,
	[chs_hole2] [nchar](10) NULL,
	[chs_side] [nchar](10) NULL,
	[chs_nam] [nchar](10) NULL,
	[chs_date] [nchar](10) NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[MAH_STA]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MAH_STA](
	[mah_num] [varchar](5) NOT NULL,
	[mah_sta] [varchar](3) NULL,
	[mah_pn] [varchar](20) NULL,
	[mah_mold] [varchar](2) NULL,
	[mah_str] [datetime] NULL,
	[mah_end] [datetime] NULL,
	[mah_cou] [int] NULL,
	[mah_result] [varchar](12) NULL,
 CONSTRAINT [PK_MAH_STA] PRIMARY KEY CLUSTERED 
(
	[mah_num] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S1', N'on', N'ZAUO062A-P02-01.T1', N'M2', CAST(0x0000A85000E05614 AS DateTime), CAST(0x0000A8330102D7AC AS DateTime), 3000, N'換班')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S2', N'off', N'ZAUO062A-P02-01.T1', N'M3', CAST(0x0000A85400F33810 AS DateTime), CAST(0x0000A85600C4CD40 AS DateTime), 2000, N'生產完畢')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S3', N'off', NULL, NULL, CAST(0x0000A82E00ED22A4 AS DateTime), CAST(0x0000A82E00EDDAA0 AS DateTime), 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S4', N'on', NULL, NULL, CAST(0x0000A85400FA06A4 AS DateTime), NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S5', N'off', NULL, NULL, NULL, NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S6', N'on', NULL, NULL, CAST(0x0000A85000E399A0 AS DateTime), NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S7', N'off', NULL, NULL, NULL, NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S8', N'off', NULL, NULL, NULL, NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'S9', N'off', NULL, NULL, NULL, NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'T1', N'off', NULL, NULL, CAST(0x0000A85000C6F660 AS DateTime), CAST(0x0000A85000C7AAD8 AS DateTime), 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'T2', N'on', NULL, NULL, CAST(0x0000A85000DDBECC AS DateTime), NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'T3', N'off', NULL, NULL, NULL, NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'T4', N'off', NULL, NULL, NULL, NULL, 0, N'生產')
INSERT [dbo].[MAH_STA] ([mah_num], [mah_sta], [mah_pn], [mah_mold], [mah_str], [mah_end], [mah_cou], [mah_result]) VALUES (N'T5', N'on', NULL, NULL, CAST(0x0000A85000E1DB24 AS DateTime), NULL, 2000, N'換班')
/****** Object:  Table [dbo].[MAH_INJ]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MAH_INJ](
	[inj_num] [varchar](5) NULL,
	[inj_pn] [varchar](20) NOT NULL,
	[inj_erm1] [int] NULL,
	[inj_erm2] [int] NULL,
	[inj_erm3] [int] NULL,
	[inj_erm4] [int] NULL,
	[inj_erm5] [int] NULL,
	[inj_erm6] [int] NULL,
 CONSTRAINT [PK_MAH_INJ] PRIMARY KEY CLUSTERED 
(
	[inj_pn] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'BUK020B-P02-02.TZ', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO013A-P02-01.T1', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO023B-P02-01.T1', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO030AA-P02-01.TZ', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO036F-P02-02.T1', 2, 4, 6, 7, 3, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO050AC-P02-01.T1', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO050M-P02-01.TZ', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO050NV-P02-01.T3', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO050Y-P02-01.T1', 2, 4, 6, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO050ZV-P02-01.T1', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO052C-P02-03.T1', 2, 4, 8, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO052D-P02-01.T1 ', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO052E-P02-01.T1', 2, 4, 8, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO055N-P02-02.T1', 2, 4, 6, 7, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO062A-P02-01.T1', 2, 4, 6, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO062A-P02-02.T1', 2, 4, 6, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (N'FBT-3', N'ZAUO062A-P02-11.T1', 10, 1, 9, 8, 7, 6)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO062A-P02-98.T1', 2, 4, 6, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO080ADV-P02-01.T1', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO080AFV-P02-01.T1', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO089AV-P02-01.T2', 2, 4, 7, 3, 5, 11)
INSERT [dbo].[MAH_INJ] ([inj_num], [inj_pn], [inj_erm1], [inj_erm2], [inj_erm3], [inj_erm4], [inj_erm5], [inj_erm6]) VALUES (NULL, N'ZAUO150D-P02-03.T1', 2, 4, 7, 3, 5, 11)
/****** Object:  Table [dbo].[MAH_HELP]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MAH_HELP](
	[mah_num] [varchar](5) NULL,
	[mah_hole] [varchar](5) NULL,
	[mah_date] [date] NULL,
	[mah_time] [time](0) NULL,
	[mah_cls] [varchar](1) NULL,
	[mah_txt] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x743D0B00 AS Date), CAST(0x00FFC40000000000 AS Time), N'A', N'領班說明文字')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x793D0B00 AS Date), NULL, N'A', N'555555555555
')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x7B3D0B00 AS Date), NULL, N'A', N'yesterday')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x7B3D0B00 AS Date), NULL, N'A', N'')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-3', N'P7-2', CAST(0x7B3D0B00 AS Date), NULL, N'A', N'Shinjuku')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-2', CAST(0x7B3D0B00 AS Date), NULL, N'A', N'Rubikb ')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x823D0B00 AS Date), NULL, N'A', N'08:00~09:00   黃化
')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x823D0B00 AS Date), NULL, N'A', N'08:00~09:00   黃化

1~450. 黃化報廢')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x823D0B00 AS Date), NULL, N'A', N'08:00~09:00   黃化

1~450. 黃化報廢

')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x823D0B00 AS Date), NULL, N'A', N'6666')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x823D0B00 AS Date), NULL, N'A', N'6666')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x823D0B00 AS Date), NULL, N'A', N'08PP
')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'M1', CAST(0x893D0B00 AS Date), NULL, N'A', N'the')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'M1', CAST(0x893D0B00 AS Date), NULL, N'A', N'the
g2g
')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'M1', CAST(0x893D0B00 AS Date), NULL, N'A', N'the
g2g
')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'M1', CAST(0x893D0B00 AS Date), NULL, N'A', N'the
g2g
')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'M1', CAST(0x893D0B00 AS Date), NULL, N'A', N'
g2g
')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'M1', CAST(0x893D0B00 AS Date), NULL, N'A', N'
g2g




tttttt')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'M1', CAST(0x893D0B00 AS Date), NULL, N'A', N'
g2g



')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'', CAST(0xAA3D0B00 AS Date), NULL, N'A', N'18:00~19:00 壓傷')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x7B3D0B00 AS Date), NULL, N'A', N'')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-2', CAST(0x7B3D0B00 AS Date), NULL, N'A', N'Rubikb  


rrff')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x823D0B00 AS Date), NULL, N'A', N'6666')
INSERT [dbo].[MAH_HELP] ([mah_num], [mah_hole], [mah_date], [mah_time], [mah_cls], [mah_txt]) VALUES (N'FBT-2', N'P8-1', CAST(0x823D0B00 AS Date), NULL, N'A', N'08PP


dry
')
/****** Object:  Table [dbo].[MAH_DATA]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MAH_DATA](
	[mah_num] [nchar](10) NULL,
	[man_pn] [varchar](20) NULL,
	[mah_stime] [nchar](10) NULL,
	[mah_rtime] [nchar](10) NULL,
	[mah_talqty] [int] NULL,
	[mah_oee] [numeric](4, 2) NULL,
	[mah_oeeg] [numeric](4, 2) NULL,
	[mah_rem] [nvarchar](50) NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[MAF_QA]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MAF_QA](
	[qa_pn] [varchar](20) NULL,
	[qa_mahnum] [varchar](5) NULL,
	[qa_mold] [varchar](2) NULL,
	[qa_hole] [varchar](5) NULL,
	[qa_pdate] [date] NULL,
	[qa_puser] [varchar](10) NULL,
	[qa_sap] [int] NULL,
	[qa_ng] [int] NULL,
	[qa_ngp] [decimal](5, 2) NULL,
	[qa_qcdate] [date] NULL,
	[qa_qcuser] [varchar](10) NULL,
	[qa_forem] [varchar](10) NULL,
	[qa_retu] [varchar](2) NULL,
	[qa_rem] [varchar](150) NULL,
	[qa_er1] [int] NULL,
	[qa_er2] [int] NULL,
	[qa_er3] [int] NULL,
	[qa_er4] [int] NULL,
	[qa_er5] [int] NULL,
	[qa_er6] [int] NULL,
	[qa_er7] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MAF_QA] ([qa_pn], [qa_mahnum], [qa_mold], [qa_hole], [qa_pdate], [qa_puser], [qa_sap], [qa_ng], [qa_ngp], [qa_qcdate], [qa_qcuser], [qa_forem], [qa_retu], [qa_rem], [qa_er1], [qa_er2], [qa_er3], [qa_er4], [qa_er5], [qa_er6], [qa_er7]) VALUES (N'ZAUO062A-P02-01.T1', N'FBT-2', N'M2', N'L8-1', CAST(0xA33D0B00 AS Date), N'E150015', 90, 0, CAST(0.00 AS Decimal(5, 2)), CAST(0xA43D0B00 AS Date), N'E150026', N'E150039', N'N', N'UYIUHIITEST', 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[MAF_QA] ([qa_pn], [qa_mahnum], [qa_mold], [qa_hole], [qa_pdate], [qa_puser], [qa_sap], [qa_ng], [qa_ngp], [qa_qcdate], [qa_qcuser], [qa_forem], [qa_retu], [qa_rem], [qa_er1], [qa_er2], [qa_er3], [qa_er4], [qa_er5], [qa_er6], [qa_er7]) VALUES (N'ZAUO062A-P02-01.T1', N'FBT-3', N'M2', N'L8-1', CAST(0xA33D0B00 AS Date), N'A960037', 77, 7, CAST(9.00 AS Decimal(5, 2)), CAST(0xA43D0B00 AS Date), N'E150030', N'E150026', N'Y', N'UHKJHKJHK', 1, 1, 1, 1, 0, 3, 0)
/****** Object:  Table [dbo].[MAF_PN]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MAF_PN](
	[maf_pn] [varchar](20) NOT NULL,
	[maf_mold] [varchar](2) NOT NULL,
	[maf_hole1] [varchar](5) NULL,
	[maf_hole2] [varchar](5) NULL,
	[maf_date] [date] NULL,
	[maf_cto] [int] NULL,
	[maf_pke] [int] NULL,
	[maf_cytime] [int] NULL,
	[maf_ptmd] [varchar](25) NULL,
	[maf_hev] [float] NULL,
	[maf_tryd] [int] NULL,
	[maf_price] [numeric](18, 1) NULL,
 CONSTRAINT [PK_MAF_PN] PRIMARY KEY CLUSTERED 
(
	[maf_pn] ASC,
	[maf_mold] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'BUK020B-P02-02.TZ', N'M1', N'-', NULL, CAST(0x7E3D0B00 AS Date), 20, 300, 15, N'LC-1500', 0.0016, 95, CAST(15.2 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO013A-P02-01.T1', N'M1', N'L2-1', N'L2-2', CAST(0x7E3D0B00 AS Date), 36, 540, 10, N'LC-1500', 0.0008, 95, CAST(2.1 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO023B-P02-01.T1', N'M1', N'L5-1', N'L5-2', CAST(0x7E3D0B00 AS Date), 21, 315, 10, N'LC-1500', 0.0019, 95, CAST(2.6 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO030AA-P02-01.TZ', N'M1', N'L16-1', N'L16-2', CAST(0x7E3D0B00 AS Date), 15, 225, 10, N'LC-1500', 0.0021, 95, CAST(3.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO036F-P02-02.T1', N'M1', N'L4-1', N'L4-2', CAST(0x7E3D0B00 AS Date), 1, 60, 35, N'LC-1500', 0.0156, 85, CAST(10.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO050AC-P02-01.T1', N'M1', N'P14-1', NULL, CAST(0x7E3D0B00 AS Date), 6, 90, 15, N'LC-1500', 0.0051, 95, CAST(15.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO050M-P02-01.TZ', N'M1', N'L10-1', N'L10-2', CAST(0x7E3D0B00 AS Date), 6, 90, 15, N'LC-1500', 0.009, 95, CAST(9.3 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO050NV-P02-01.T3', N'M1', N'L1-1', N'L1-2', CAST(0xAB3D0B00 AS Date), 1, 40, 30, N'LC-1500', 0.0286, 85, CAST(14.9 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO050Y-P02-01.T1', N'M1', N'L19-1', N'L19-2', CAST(0x7E3D0B00 AS Date), 6, 90, 15, N'HL-8504', 0.0049, 95, CAST(11.2 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO050ZV-P02-01.T1', N'M1', N'L19-1', NULL, CAST(0x7E3D0B00 AS Date), 1, 60, 35, N'LC-1500', 0.0204, 85, CAST(15.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO052C-P02-03.T1', N'M1', N'L8-1', N'L8-2', CAST(0x7E3D0B00 AS Date), 6, 90, 24, N'HL-8504', 0.0052, 85, CAST(13.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO052C-P02-03.T1', N'M2', N'L8-1', N'L8-2', CAST(0x7E3D0B00 AS Date), 6, 90, 24, N'HL-8504', 0.0052, 85, CAST(13.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO052D-P02-01.T1 ', N'M1', N'L3-1', N'L3-2', CAST(0x7E3D0B00 AS Date), 6, 90, 15, N'LC-1500', 0.004, 95, CAST(8.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO052E-P02-01.T1', N'M1', N'L8-1', NULL, CAST(0xAB3D0B00 AS Date), 6, 90, 24, N'HL-8504', 0.0052, 85, CAST(13.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO055N-P02-02.T1', N'M1', N'P32-1', N'P32-2', CAST(0x7E3D0B00 AS Date), 6, 90, 20, N'HL-8004', 0.0056, 85, CAST(12.8 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO055N-P02-02.T1', N'M2', N'P32-1', N'P32-2', CAST(0x7E3D0B00 AS Date), 6, 90, 20, N'HL-8004', 0.0056, 85, CAST(12.8 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-01.T1', N'M1', N'P8-1', N'P8-2', CAST(0x7E3D0B00 AS Date), 4, 60, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-01.T1', N'M2', N'P8-1', N'P8-2', CAST(0x7E3D0B00 AS Date), 4, 60, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-01.T1', N'M3', N'P8-1', N'P8-2', CAST(0x7E3D0B00 AS Date), 4, 60, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-01.T1', N'M4', N'P8-1', N'P8-2', CAST(0x7E3D0B00 AS Date), 4, 60, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-02.T1', N'M1', N'P8-1', N'P8-2', CAST(0xAB3D0B00 AS Date), 4, 60, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-02.T1', N'M2', N'P8-1', N'P8-2', CAST(0xAB3D0B00 AS Date), 4, 60, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-02.T1', N'M3', N'P8-1', N'P8-2', CAST(0xAB3D0B00 AS Date), 4, 60, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-02.T1', N'M4', N'P8-1', N'P8-2', CAST(0xAB3D0B00 AS Date), 4, 60, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-98.T1', N'M1', N'P8-1', N'P8-2', CAST(0xAB3D0B00 AS Date), 400, 400, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-98.T1', N'M2', N'P8-1', N'P8-2', CAST(0xAB3D0B00 AS Date), 400, 400, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-98.T1', N'M3', N'P8-1', N'P8-2', CAST(0xAB3D0B00 AS Date), 400, 400, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO062A-P02-98.T1', N'M4', N'P8-1', N'P8-2', CAST(0xAB3D0B00 AS Date), 400, 400, 20, N'LC-1500', 0.0099, 85, CAST(11.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO080ADV-P02-01.T1', N'M1', N'L11-1', NULL, CAST(0x7E3D0B00 AS Date), 1, 30, 35, N'LC-1500', 0.0526, 85, CAST(24.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO080AFV-P02-01.T1', N'M1', N'L3-1', NULL, CAST(0x7E3D0B00 AS Date), 1, 30, 35, N'LC-1500', 0.0667, 85, CAST(22.0 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO089AV-P02-01.T2', N'M1', N'L7-1', NULL, CAST(0x7E3D0B00 AS Date), 1, 60, 40, N'LC-1500', 0.0385, 85, CAST(23.8 AS Numeric(18, 1)))
INSERT [dbo].[MAF_PN] ([maf_pn], [maf_mold], [maf_hole1], [maf_hole2], [maf_date], [maf_cto], [maf_pke], [maf_cytime], [maf_ptmd], [maf_hev], [maf_tryd], [maf_price]) VALUES (N'ZAUO150D-P02-03.T1', N'M1', N'E16-1', NULL, CAST(0x7E3D0B00 AS Date), 1, 30, 50, N'GH1000S', 0.2, 85, CAST(52.0 AS Numeric(18, 1)))
/****** Object:  Table [dbo].[MAF_PDT]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MAF_PDT](
	[map_num] [varchar](5) NULL,
	[map_pn] [varchar](20) NULL,
	[map_rpn] [varchar](20) NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-1', N'ZAV001', N'ZAN001')
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-2', N'ZAV002', N'ZAN002')
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-3', N'ZAV003', N'ZAN003')
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-4', N'ZAV004', N'ZAN004')
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-5', N'ZAV005', N'ZAN005')
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-6', N'ZAV006', N'ZAN006')
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-7', N'ZAV007', N'ZAN007')
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-8', N'ZAV008', N'ZAN008')
INSERT [dbo].[MAF_PDT] ([map_num], [map_pn], [map_rpn]) VALUES (N'FAS-9', N'ZAV009', N'ZAN009')
/****** Object:  Table [dbo].[MAF_DATA]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MAF_DATA](
	[maf_num] [varchar](5) NULL,
	[maf_pn] [varchar](20) NULL,
	[maf_time] [time](0) NULL,
	[maf_date] [date] NULL,
	[maf_hole1] [varchar](6) NULL,
	[maf_hole2] [varchar](6) NULL,
	[maf_mold] [varchar](2) NULL,
	[maf_cytime] [int] NULL,
	[maf_cto] [int] NULL,
	[maf_pke] [int] NULL,
	[maf_onresult] [varchar](12) NULL,
	[maf_oncount] [int] NULL,
	[maf_ondate] [date] NULL,
	[maf_ofresult] [varchar](12) NULL,
	[maf_ofreason] [varchar](60) NULL,
	[maf_offcount] [int] NULL,
	[maf_offdate] [date] NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[MAF_DATA] ([maf_num], [maf_pn], [maf_time], [maf_date], [maf_hole1], [maf_hole2], [maf_mold], [maf_cytime], [maf_cto], [maf_pke], [maf_onresult], [maf_oncount], [maf_ondate], [maf_ofresult], [maf_ofreason], [maf_offcount], [maf_offdate]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', NULL, NULL, N'L16-1', N'L16-2', N'M1', 10, 15, 225, N'生產', 999, CAST(0xAB3D0B00 AS Date), NULL, NULL, NULL, NULL)
INSERT [dbo].[MAF_DATA] ([maf_num], [maf_pn], [maf_time], [maf_date], [maf_hole1], [maf_hole2], [maf_mold], [maf_cytime], [maf_cto], [maf_pke], [maf_onresult], [maf_oncount], [maf_ondate], [maf_ofresult], [maf_ofreason], [maf_offcount], [maf_offdate]) VALUES (N'S2', N'ZAUO089AV-P02-01.T2', NULL, NULL, N'L7-1', N'', N'M1', 40, 1, 60, N'試模', 5000, CAST(0xAB3D0B00 AS Date), N'生產完畢', N'', 6500, CAST(0xAB3D0B00 AS Date))
INSERT [dbo].[MAF_DATA] ([maf_num], [maf_pn], [maf_time], [maf_date], [maf_hole1], [maf_hole2], [maf_mold], [maf_cytime], [maf_cto], [maf_pke], [maf_onresult], [maf_oncount], [maf_ondate], [maf_ofresult], [maf_ofreason], [maf_offcount], [maf_offdate]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', NULL, NULL, N'L2-1', N'L2-2', N'M1', 10, 36, 540, N'生產', 5000, CAST(0xAB3D0B00 AS Date), NULL, NULL, NULL, NULL)
INSERT [dbo].[MAF_DATA] ([maf_num], [maf_pn], [maf_time], [maf_date], [maf_hole1], [maf_hole2], [maf_mold], [maf_cytime], [maf_cto], [maf_pke], [maf_onresult], [maf_oncount], [maf_ondate], [maf_ofresult], [maf_ofreason], [maf_offcount], [maf_offdate]) VALUES (N'S6', N'ZAUO062A-P02-01.T1', NULL, NULL, N'P8-1', N'P8-2', N'M1', 20, 4, 60, N'生產', 5000, CAST(0xAB3D0B00 AS Date), NULL, NULL, NULL, NULL)
INSERT [dbo].[MAF_DATA] ([maf_num], [maf_pn], [maf_time], [maf_date], [maf_hole1], [maf_hole2], [maf_mold], [maf_cytime], [maf_cto], [maf_pke], [maf_onresult], [maf_oncount], [maf_ondate], [maf_ofresult], [maf_ofreason], [maf_offcount], [maf_offdate]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', NULL, NULL, N'L1-1', N'L1-2', N'M1', 30, 1, 40, N'生產', 5000, CAST(0xAF3D0B00 AS Date), N'試模完畢', N'', 5000, CAST(0xB13D0B00 AS Date))
INSERT [dbo].[MAF_DATA] ([maf_num], [maf_pn], [maf_time], [maf_date], [maf_hole1], [maf_hole2], [maf_mold], [maf_cytime], [maf_cto], [maf_pke], [maf_onresult], [maf_oncount], [maf_ondate], [maf_ofresult], [maf_ofreason], [maf_offcount], [maf_offdate]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', NULL, NULL, N'P8-1', N'P8-2', N'M1', 20, 400, 60, N'生產', 1000, CAST(0xAF3D0B00 AS Date), NULL, NULL, NULL, NULL)
/****** Object:  Table [dbo].[ERR_LIST]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ERR_LIST](
	[err_id] [int] IDENTITY(1,1) NOT NULL,
	[err_nam] [varchar](10) NULL,
 CONSTRAINT [PK_ERR_LIST] PRIMARY KEY CLUSTERED 
(
	[err_id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[ERR_LIST] ON
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (1, N'離型痕    ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (2, N'冷料      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (3, N'黑點      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (4, N'亮點      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (5, N'白污      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (6, N'壓傷      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (7, N'刮傷      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (8, N'縮水      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (9, N'破片      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (10, N'暗影      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (11, N'其他      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (12, N'正常      ')
INSERT [dbo].[ERR_LIST] ([err_id], [err_nam]) VALUES (13, N'殘膠')
SET IDENTITY_INSERT [dbo].[ERR_LIST] OFF
/****** Object:  Table [dbo].[ERR_COUNT]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ERR_COUNT](
	[err_mahnum] [varchar](5) NULL,
	[err_mafpn] [varchar](20) NULL,
	[err_date] [date] NULL,
	[err_time] [time](0) NULL,
	[err_shift] [varchar](2) NULL,
	[err_id] [int] NULL,
	[err_ct] [int] NULL,
	[err_usr] [varchar](5) NULL,
	[err_mold] [varchar](2) NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0006AA0000000000 AS Time), N'A', 12, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0006AA0000000000 AS Time), N'A', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0006AA0000000000 AS Time), N'A', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0006AA0000000000 AS Time), N'A', 7, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0006AA0000000000 AS Time), N'A', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0006AA0000000000 AS Time), N'A', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0006AA0000000000 AS Time), N'A', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T2', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0062B90000000000 AS Time), N'A', 12, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T2', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0062B90000000000 AS Time), N'A', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T2', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0062B90000000000 AS Time), N'A', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T2', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0062B90000000000 AS Time), N'A', 8, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T2', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0062B90000000000 AS Time), N'A', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T2', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0062B90000000000 AS Time), N'A', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T2', N'ZAUO052C-P02-03.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0062B90000000000 AS Time), N'A', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x00F3BD0000000000 AS Time), N'A', 12, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x00F3BD0000000000 AS Time), N'A', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x00F3BD0000000000 AS Time), N'A', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x00F3BD0000000000 AS Time), N'A', 7, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x00F3BD0000000000 AS Time), N'A', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x00F3BD0000000000 AS Time), N'A', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'BUK020B-P02-02.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x00F3BD0000000000 AS Time), N'A', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x00CEC00000000000 AS Time), N'B', 12, 180, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x00CEC00000000000 AS Time), N'B', 2, 8, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x00CEC00000000000 AS Time), N'B', 4, 3, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x00CEC00000000000 AS Time), N'B', 7, 2, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x00CEC00000000000 AS Time), N'B', 3, 4, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x00CEC00000000000 AS Time), N'B', 5, 1, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'T5', N'ZAUO013A-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x00CEC00000000000 AS Time), N'B', 11, 3, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xAF3D0B00 AS Date), CAST(0x00EED00000000000 AS Time), N'B', 12, 93, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xAF3D0B00 AS Date), CAST(0x00EED00000000000 AS Time), N'B', 2, 6, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xAF3D0B00 AS Date), CAST(0x00EED00000000000 AS Time), N'B', 4, 12, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xAF3D0B00 AS Date), CAST(0x00EED00000000000 AS Time), N'B', 7, 3, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xAF3D0B00 AS Date), CAST(0x00EED00000000000 AS Time), N'B', 3, 3, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xAF3D0B00 AS Date), CAST(0x00EED00000000000 AS Time), N'B', 5, 3, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xAF3D0B00 AS Date), CAST(0x00EED00000000000 AS Time), N'B', 11, 7, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAF3D0B00 AS Date), CAST(0x00F9DB0000000000 AS Time), N'A', 12, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAF3D0B00 AS Date), CAST(0x00F9DB0000000000 AS Time), N'A', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAF3D0B00 AS Date), CAST(0x00F9DB0000000000 AS Time), N'A', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAF3D0B00 AS Date), CAST(0x00F9DB0000000000 AS Time), N'A', 7, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAF3D0B00 AS Date), CAST(0x00F9DB0000000000 AS Time), N'A', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAF3D0B00 AS Date), CAST(0x00F9DB0000000000 AS Time), N'A', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAF3D0B00 AS Date), CAST(0x00F9DB0000000000 AS Time), N'A', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xB13D0B00 AS Date), CAST(0x0087A50000000000 AS Time), N'C', 12, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xB13D0B00 AS Date), CAST(0x0087A50000000000 AS Time), N'C', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xB13D0B00 AS Date), CAST(0x0087A50000000000 AS Time), N'C', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xB13D0B00 AS Date), CAST(0x0087A50000000000 AS Time), N'C', 7, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xB13D0B00 AS Date), CAST(0x0087A50000000000 AS Time), N'C', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xB13D0B00 AS Date), CAST(0x0088A50000000000 AS Time), N'C', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S2', N'ZAUO050NV-P02-01.T3', CAST(0xB13D0B00 AS Date), CAST(0x0088A50000000000 AS Time), N'C', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xB23D0B00 AS Date), CAST(0x004ABA0000000000 AS Time), N'A', 12, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xB23D0B00 AS Date), CAST(0x004ABA0000000000 AS Time), N'A', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'FBT-2', N'ZAUO023B-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0034A80000000000 AS Time), N'A', 12, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'FBT-2', N'ZAUO023B-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0034A80000000000 AS Time), N'A', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0085C10000000000 AS Time), N'A', 12, 46, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0085C10000000000 AS Time), N'A', 2, 1, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0085C10000000000 AS Time), N'A', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0085C10000000000 AS Time), N'A', 7, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0085C10000000000 AS Time), N'A', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0085C10000000000 AS Time), N'A', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xAB3D0B00 AS Date), CAST(0x0085C10000000000 AS Time), N'A', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'FBT-2', N'ZAUO023B-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0034A80000000000 AS Time), N'A', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'FBT-2', N'ZAUO023B-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0034A80000000000 AS Time), N'A', 7, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'FBT-2', N'ZAUO023B-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0034A80000000000 AS Time), N'A', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'FBT-2', N'ZAUO023B-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0034A80000000000 AS Time), N'A', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'FBT-2', N'ZAUO023B-P02-01.T1', CAST(0xAB3D0B00 AS Date), CAST(0x0034A80000000000 AS Time), N'A', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xB23D0B00 AS Date), CAST(0x004ABA0000000000 AS Time), N'A', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xAF3D0B00 AS Date), CAST(0x007BD50000000000 AS Time), N'B', 12, 1600, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xAF3D0B00 AS Date), CAST(0x007BD50000000000 AS Time), N'B', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xAF3D0B00 AS Date), CAST(0x007BD50000000000 AS Time), N'B', 4, 1, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xAF3D0B00 AS Date), CAST(0x007BD50000000000 AS Time), N'B', 6, 1, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xAF3D0B00 AS Date), CAST(0x007BD50000000000 AS Time), N'B', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xAF3D0B00 AS Date), CAST(0x007BD50000000000 AS Time), N'B', 5, 1, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xAF3D0B00 AS Date), CAST(0x007BD50000000000 AS Time), N'B', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xB23D0B00 AS Date), CAST(0x004ABA0000000000 AS Time), N'A', 7, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xB23D0B00 AS Date), CAST(0x004ABA0000000000 AS Time), N'A', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xB23D0B00 AS Date), CAST(0x004ABA0000000000 AS Time), N'A', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S1', N'ZAUO030AA-P02-01.TZ', CAST(0xB23D0B00 AS Date), CAST(0x004BBA0000000000 AS Time), N'A', 11, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xB23D0B00 AS Date), CAST(0x0097BC0000000000 AS Time), N'A', 12, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xB23D0B00 AS Date), CAST(0x0097BC0000000000 AS Time), N'A', 2, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xB23D0B00 AS Date), CAST(0x0097BC0000000000 AS Time), N'A', 4, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xB23D0B00 AS Date), CAST(0x0097BC0000000000 AS Time), N'A', 6, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xB23D0B00 AS Date), CAST(0x0097BC0000000000 AS Time), N'A', 3, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xB23D0B00 AS Date), CAST(0x0097BC0000000000 AS Time), N'A', 5, 0, N'測試', N'M1')
INSERT [dbo].[ERR_COUNT] ([err_mahnum], [err_mafpn], [err_date], [err_time], [err_shift], [err_id], [err_ct], [err_usr], [err_mold]) VALUES (N'S4', N'ZAUO062A-P02-98.T1', CAST(0xB23D0B00 AS Date), CAST(0x0097BC0000000000 AS Time), N'A', 11, 0, N'測試', N'M1')
/****** Object:  Table [dbo].[CLS_USER]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CLS_USER](
	[user_id] [varchar](6) NULL,
	[user_name] [varchar](6) NULL,
	[user_shift] [varchar](5) NULL,
	[user_online] [varchar](1) NULL,
	[user_sdate] [date] NULL,
	[user_stime] [time](0) NULL,
	[user_scount] [int] NULL,
	[user_smills] [bigint] NULL,
	[user_edate] [date] NULL,
	[user_etime] [time](0) NULL,
	[user_ecount] [int] NULL,
	[user_wksec] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'FBT-2', N'測試', N'A', N'N', CAST(0x7E3D0B00 AS Date), CAST(0x006DDA0000000000 AS Time), 1097611, NULL, CAST(0x7F3D0B00 AS Date), CAST(0x0026DC0000000000 AS Time), 1099612, 28800)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'FBT-3', N'領班', N'A', N'N', CAST(0xA33D0B00 AS Date), CAST(0x0006BE0000000000 AS Time), 1102444, 1513143046513, CAST(0xA33D0B00 AS Date), CAST(0x007DBE0000000000 AS Time), 1102666, 118)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'FBT-2', N'測試', N'A', N'Y', CAST(0xAB3D0B00 AS Date), CAST(0x0034A80000000000 AS Time), 1099612, 1513828660453, NULL, NULL, NULL, NULL)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'T1', N'測試', N'A', N'Y', CAST(0xAB3D0B00 AS Date), CAST(0x0006AA0000000000 AS Time), 0, 1513829126828, NULL, NULL, NULL, NULL)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'T2', N'測試', N'A', N'Y', CAST(0xAB3D0B00 AS Date), CAST(0x0062B90000000000 AS Time), 0, 1513833058074, NULL, NULL, NULL, NULL)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'S2', N'測試', N'B', N'N', CAST(0xAF3D0B00 AS Date), CAST(0x00EED00000000000 AS Time), 0, 1514184686587, CAST(0xAF3D0B00 AS Date), CAST(0x0046D10000000000 AS Time), 1500, 88)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'S4', N'測試', N'B', N'Y', CAST(0xAF3D0B00 AS Date), CAST(0x007BD50000000000 AS Time), 0, 1514185851361, NULL, NULL, NULL, NULL)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'S1', N'測試', N'A', N'Y', CAST(0xAF3D0B00 AS Date), CAST(0x00F9DB0000000000 AS Time), 3000, 1514187513562, NULL, NULL, NULL, NULL)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'S2', N'測試', N'C', N'N', CAST(0xB13D0B00 AS Date), CAST(0x0087A50000000000 AS Time), 1500, 1514346375521, CAST(0xB13D0B00 AS Date), CAST(0x0094A50000000000 AS Time), 2000, 12)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'S1', N'測試', N'A', N'Y', CAST(0xB23D0B00 AS Date), CAST(0x004ABA0000000000 AS Time), 3000, 1514438090118, NULL, NULL, NULL, NULL)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'S4', N'測試', N'A', N'Y', CAST(0xB23D0B00 AS Date), CAST(0x0097BC0000000000 AS Time), 0, 1514438679118, NULL, NULL, NULL, NULL)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'S1', N'測試', N'A', N'N', CAST(0xAB3D0B00 AS Date), CAST(0x00F3BD0000000000 AS Time), 0, 1513834227384, CAST(0xAB3D0B00 AS Date), CAST(0x00A9C10000000000 AS Time), 3000, 949)
INSERT [dbo].[CLS_USER] ([user_id], [user_name], [user_shift], [user_online], [user_sdate], [user_stime], [user_scount], [user_smills], [user_edate], [user_etime], [user_ecount], [user_wksec]) VALUES (N'T5', N'測試', N'B', N'N', CAST(0xAB3D0B00 AS Date), CAST(0x00CEC00000000000 AS Time), 0, 1513834958380, CAST(0xAB3D0B00 AS Date), CAST(0x0013C10000000000 AS Time), 2000, 69)
/****** Object:  Table [dbo].[CLS_LIST]    Script Date: 01/02/2018 09:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CLS_LIST](
	[cla_id] [varchar](10) NULL,
	[cla_pwd] [varchar](10) NULL,
	[cla_dep] [varchar](6) NULL,
	[cla_usr] [varchar](6) NULL,
	[cla_dut] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'test', N'123', N'早班', N'領班', 2)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'test1', N'123', N's', N'測試', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'test2', N'123', NULL, N'工程', 3)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150010', N'E150010', N'工程部', N'董國瀧', 3)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150015', N'E150015', N'工程部', N'羅凱隆', 3)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150026', N'E150026', N'工程部', N'田坤煌', 3)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150088', N'E150088', N'工程部', N'許世龍', 3)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150013', N'E150013', N'製造部', N'戴金美', 2)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150027', N'E150027', N'製造部', N'梁銀鳳', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150030', N'E150030', N'製造部', N'田沂絜', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150034', N'E150034', N'製造部', N'鍾銘賢', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150039', N'E150039', N'製造部', N'郭淑卿', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150042', N'E150042', N'製造部', N'黃幼鳳', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150054', N'E150054', N'製造部', N'王嬪', 2)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150056', N'E150056', N'製造部', N'林柏廷', 2)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150063', N'E150063', N'製造部', N'簡均哲', 2)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150065', N'E150065', N'製造部', N'黃俊誠', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150072', N'E150072', N'製造部', N'黃建勳', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150077', N'E150077', N'製造部', N'王鴻錦', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150078', N'E150078', N'製造部', N'李冠霆', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150080', N'E150080', N'製造部', N'游峻鴻', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150085', N'E150085', N'製造部', N'林慶家', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150086', N'E150086', N'製造部', N'官宗翰', 2)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150095', N'E150095', N'製造部', N'陳力維', 2)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150097', N'E150097', N'製造部', N'林鴻揚', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150107', N'E150107', N'製造部', N'莊郁潔', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150112', N'E150112', N'製造部', N'張素潔', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150114', N'E150114', N'製造部', N'周敏', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150116', N'E150116', N'製造部', N'黃佩琪', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170002', N'E170002', N'製造部', N'溫雅如', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170004', N'E170004', N'製造部', N'陳雅雯', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170005', N'E170005', N'製造部', N'單彥禎', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170009', N'E170009', N'製造部', N'張潔妤', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170015', N'E170015', N'製造部', N'謝雨如', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170016', N'E170016', N'製造部', N'房業洋', 2)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170018', N'E170018', N'製造部', N'黃憶玲', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170023', N'E170023', N'製造部', N'楊煌志', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170029', N'E170029', N'製造部', N'張偉純', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170030', N'E170030', N'製造部', N'盧冠宏', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170031', N'E170031', N'製造部', N'賴秀群', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170034', N'E170034', N'製造部', N'陳氏海', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170036', N'E170036', N'製造部', N'吳湘芸', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170039', N'E170039', N'製造部', N'王思涵', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170041', N'E170041', N'製造部', N'蘇郁茜', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170045', N'E170045', N'製造部', N'鄧立昆', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170046', N'E170046', N'製造部', N'阮維心', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170048', N'E170048', N'製造部', N'曾蓓欣', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170049', N'E170049', N'製造部', N'許婉茹', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170053', N'E170053', N'製造部', N'楊惠如', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170054', N'E170054', N'製造部', N'屈筱茹', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150041', N'E150041', N'品管部', N'劉純甄', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150058', N'E150058', N'品管部', N'陳炫智', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150066', N'E150066', N'品管部', N'陳信翰', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150067', N'E150067', N'品管部', N'呂瑋峻', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150073', N'E150073', N'品管部', N'翁莉淇', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150102', N'E150102', N'品管部', N'鄭尹淳', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E150115', N'E150115', N'品管部', N'王艷利', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'E170019', N'E170019', N'品管部', N'鍾瑞娟', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'A160001', N'A160001', N'台云', N'巫雪夢', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'A900008', N'A900008', N'台云', N'許婷詒', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'A910007', N'A910007', N'台云', N'蔡莉珠', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'A910052', N'A910052', N'台云', N'范逸棋', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'A960037', N'A960037', N'台云', N'阮玉芳', 1)
INSERT [dbo].[CLS_LIST] ([cla_id], [cla_pwd], [cla_dep], [cla_usr], [cla_dut]) VALUES (N'A102019', N'A102019', N'台云', N'王明慧', 1)
